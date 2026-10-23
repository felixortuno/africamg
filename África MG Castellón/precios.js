/* Estimaciones de trabajo pendiente. Los importes comerciales se leen de la propuesta. */
(function(root){
  'use strict';
  var definitions=[
    ['nueva',20,14,24,false,'Terminar la web existente: contenidos, móvil, revisión y entrega.'],
    ['retoque',10,7,12,false,'Actualizar textos, fotos y precios de la web actual. Alternativa a la web nueva.'],
    ['interna',33,25,41,true,'Agenda, horarios, bloqueos y permisos del equipo.'],
    ['crm',20,15,25,true,'Contactos, historial, notas e importación de datos.'],
    ['erp',23,17,29,true,'Cobros, cierre y exportación; conector automático de facturas aparte.'],
    ['reservas',51,38,64,true,'Reservas reales, agente web acotado, cambios y recordatorios.'],
    ['whatsapp',36,27,45,true,'Atención y reservas por WhatsApp, con derivación a una persona.'],
    ['bonos',26,19,32,true,'Compra de bonos regalo, códigos y control de saldo.'],
    ['resenas',9,6,11,true,'Solicitud de reseñas después de cada cita y diseño de placa QR.'],
    ['espera',18,13,22,true,'Avisar de huecos libres y asignarlos sin duplicidades.'],
    ['campanas',15,11,18,true,'Automatizaciones de cumpleaños y recordatorio de retoques.'],
    ['senal',19,14,24,true,'Pago de señal, confirmación y reglas de devolución.'],
    ['app',25,19,31,true,'PWA instalable para consultar y gestionar citas y bonos.'],
    ['tienda',38,29,46,true,'Hasta 20 productos, stock integrado, pago y recogida en el centro.'],
    ['telefono',34,25,43,true,'Agente de voz conectado a reservas mediante un proveedor.'],
    ['recuperar',20,15,25,true,'Preguntas frecuentes y una campaña para recuperar clientas.'],
    ['informes',15,11,18,true,'Panel de citas, cobros, servicios e indicadores básicos.'],
    ['google',5,4,6,false,'Revisión y configuración inicial de la ficha de Google.'],
    ['gestoria',24,16,36,true,'Un conector de facturación y exportación a gestoría, pendiente de validar.'],
    ['plataforma',40,32,50,false,'Base de datos, accesos, copias y despliegue. Se cuenta una sola vez.']
  ];
  function cents(n){return Math.round((n+Number.EPSILON)*100);}
  function valid(n){return typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=1e9;}
  function create(bases,options){
    return definitions.map(function(d){
      var original=bases[d[0]]||options.find(function(o){return o.id===d[0]});
      return {id:d[0],hours:d[1],low:d[2],high:d[3],backend:d[4],scope:d[5],
        name:original?original.nombre:d[0]==='gestoria'?'Facturas y gestoría':'Base técnica compartida',
        original:original?original.precio:null,req:original?(original.req||[]).slice():d[0]==='gestoria'?['erp']:[]};
    });
  }
  function initial(products){
    var state={rate:25,rows:{}};
    products.forEach(function(p){var price=p.original===null?p.hours*25:p.original;
      state.rows[p.id]={hours:p.hours,rate:price/p.hours,price:price,selected:p.id!=='retoque'&&p.id!=='gestoria'};
    });return state;
  }
  function normalize(state,products){
    var rows=state.rows;
    if(rows.retoque.selected){products.forEach(function(p){rows[p.id].selected=p.id==='retoque';});}
    else{
      function add(id){if(!rows[id].selected)rows[id].selected=true;
        var p=products.find(function(x){return x.id===id;});p.req.forEach(add);
      }
      products.filter(function(p){return p.id!=='plataforma'&&rows[p.id].selected;}).forEach(function(p){add(p.id);});
      if(products.some(function(p){return p.id!=='plataforma'&&rows[p.id].selected;}))rows.nueva.selected=true;
      rows.plataforma.selected=products.some(function(p){return p.backend&&rows[p.id].selected;});
    }return state;
  }
  function restore(saved,products){
    var state=initial(products);
    if(saved&&saved.rows){
      if(valid(saved.rate))state.rate=saved.rate;
      products.forEach(function(p){var r=saved.rows[p.id];
        if(r&&valid(r.hours)&&valid(r.rate)&&valid(r.price)&&cents(r.hours*r.rate)===cents(r.price))state.rows[p.id]={hours:r.hours,rate:r.rate,price:r.price,selected:!!r.selected};
      });
    }return normalize(state,products);
  }
  function select(state,products,id,on){
    var rows=state.rows;
    if(id==='plataforma')return state;
    rows[id].selected=on;
    if(on&&id!=='retoque')rows.retoque.selected=false;
    if(!on){
      if(id==='nueva')products.forEach(function(p){rows[p.id].selected=false;});
      var changed=true;while(changed){changed=false;products.forEach(function(p){if(rows[p.id].selected&&p.req.some(function(dep){return !rows[dep].selected;})){rows[p.id].selected=false;changed=true;}});}
    }return normalize(state,products);
  }
  function edit(state,id,key,value){
    if(!valid(value))throw new Error('Usa un número igual o mayor que cero.');
    var r=state.rows[id], next={hours:r.hours,rate:r.rate,price:r.price,selected:r.selected};
    if(key==='price'){
      if(next.hours===0&&value>0)throw new Error('Indica horas mayores que cero antes de poner un precio.');
      next.price=cents(value)/100;next.rate=next.hours?next.price/next.hours:0;
    }else if(key==='hours'||key==='rate'){
      next[key]=value;next.price=cents(next.hours*next.rate)/100;
    }else throw new Error('Campo desconocido.');
    if(!valid(next.price)||!valid(next.rate))throw new Error('El importe es demasiado grande.');
    state.rows[id]=next;return state;
  }
  function total(state){return Object.keys(state.rows).reduce(function(t,id){var r=state.rows[id];if(r.selected){t.hours+=r.hours;t.cents+=cents(r.price);}return t;},{hours:0,cents:0});}
  function split(price,oldPrice,oldDeposit){
    var amount=cents(price),ratio=oldPrice>0?oldDeposit/oldPrice:.2;
    var monthly=Math.floor((amount-Math.round(amount*ratio))/12);
    return {precio:amount/100,cuota:monthly/100,empezar:(amount-12*monthly)/100};
  }
  var api={create:create,initial:initial,restore:restore,normalize:normalize,select:select,edit:edit,total:total,split:split};
  if(typeof module==='object'&&module.exports)module.exports=api;else root.AMGPrecios=api;
})(typeof globalThis!=='undefined'?globalThis:this);
