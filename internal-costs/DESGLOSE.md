# Desglose interno de productos y costes · África MG

Documento interno de NOVORA. Referencia: 22 de octubre de 2026. Importes sin IVA salvo que se indique otra cosa. No modifica la propuesta que ve la clienta.

## Lectura rápida

La propuesta vigente contiene **18 productos con precio: dos alternativas de web y 16 módulos**. Además ofrece **«Facturas y gestoría» sin tarifa**, por lo que este informe describe 19 ofertas. No son 19 elementos para sumar: la web nueva y el retoque son alternativas.

La combinación de **web nueva y todos los módulos tarifados suma 6.430 € de puesta en marcha y 305 €/mes**. El texto de la propuesta dice que el descuento del 25 % ya está incluido. No hay que volver a aplicarlo. La puesta en marcha se financia mediante entrada y 12 cuotas; el mantenimiento se añade a las cuotas, no forma parte de ese precio de construcción.

Con el alcance mínimo delimitado en este informe, reutilizando la interfaz existente, esa combinación requiere una estimación de **447 horas pendientes**, incluida una base técnica común de 40 horas que se cobra una sola vez. A un coste interno supuesto de 25 €/h y con una reserva del 15 % sobre la construcción, el coste de mano de obra previsto es **12.851,25 €**. Con la provisión única de **25 € para la placa QR**, el coste de alta previsto por el modelo es **12.876,25 €**, antes de cualquier otro coste directo que falte cotizar, financiación y beneficio. El precio vigente de 6.430 € equivale a **14,38 € por hora estimada**, antes de esos conceptos. Las tarifas actuales no cubren este escenario de desarrollo a medida.

Esto es una **estimación de coste futuro**, no una medición del coste real ya incurrido. No existen partes de horas ni facturas de proveedores en el repositorio que permitan certificar ese coste real. Este informe sirve para sustituir las hipótesis por datos reales. La calculadora incorporada a la propuesta se limita a horas × precio por hora; no incorpora el modelo de costes de este informe.

## Qué se reutiliza y qué falta construir

Existe una web estática bastante desarrollada: diseño, carta de tratamientos, fotos, equipo, preguntas frecuentes, vídeo/recorrido y formularios visuales para reservas y bonos. Esa interfaz ahorra trabajo y está tenida en cuenta en las horas pendientes. La carta de datos de la web actual contiene **41 tratamientos**. La demostración antigua afirma que hay 97 y usa otros precios: hay que validar la carta definitiva con África antes de cargarla en producción.

Los sistemas operativos todavía son demostraciones:

- En `demo/index.html`, `AMG_CONFIG` tiene vacías la URL y la clave de Supabase. La reserva y el bono devuelven una respuesta de ejemplo y no se guardan.
- Se prevén llamadas a `huecos_ocupados`, `crear_reserva` y `solicitar_bono`, pero no se ha encontrado su implementación, esquema de base de datos ni backend en este repositorio.
- El WhatsApp, la IA, la agenda, el panel y el fichaje de `demo-reservas.html` funcionan con JavaScript local y datos guionizados. No constituyen integraciones reales con WhatsApp, IA, telefonía o pagos.
- La publicación actual es estática en Vercel y lleva `noindex/nofollow`. Publicar la web comercial y verificar su indexabilidad es una tarea distinta de mostrar esta propuesta.

Las horas siguientes estiman terminar un producto utilizable, con pruebas e implantación; no simplemente conectar un botón de la maqueta. Tampoco atribuyen horas históricas a lo ya construido.

## Hipótesis que hacen comparables las horas

El escenario base contempla un centro, entre uno y cinco profesionales, uso de componentes y proveedores existentes, asistencia de herramientas de programación, contenidos y reglas facilitados por la clienta, una importación CSV normalizada y dos rondas de revisión. Se reutiliza la interfaz actual. No contempla aplicaciones nativas, varias sedes, sincronización en tiempo real con Treatwell, un motor fiscal propio ni soporte ilimitado.

Las columnas mínima/base/máxima son escenarios orientativos de trabajo pendiente, no compromisos cerrados. El mínimo requiere datos limpios, decisiones rápidas y ausencia de integraciones complicadas. El máximo sigue dentro del alcance descrito; un cambio de alcance puede superarlo. Los plazos de semanas de la propuesta son calendario comercial y no permiten deducir horas.

El coste interno de ejemplo es:

`(2.000 € de remuneración + 400 € de estructura + 100 € de herramientas generales) / 100 horas facturables al mes = 25 €/h`

Estos valores son supuestos que deben sustituirse por tus gastos reales. Las herramientas generales de esos 100 € no deben incluir otra vez el alojamiento o los consumos que se imputen directamente al proyecto. Las horas facturables son las realmente vendibles después de ventas, administración y tiempos sin proyecto; no todas las horas del mes.

## Tabla de ofertas vigentes

«Trabajo €» es únicamente `horas base × 25 €/h × 1,15`. Incluye la reserva de construcción del 15 %, pero **no incluye** base técnica común, compras directas, consumos, proveedores, margen ni IVA. No es un precio de venta recomendado por sí solo. El soporte es una previsión mensual de trabajo humano por módulo; el consumo de servicios se calcula aparte. **La reserva del 15 % se aplica solo a la construcción; el soporte mensual no lleva ese incremento en este modelo.**

| Producto | Alta vigente € | Cuota vigente €/mes | Horas mín./base/máx. | Trabajo € | Soporte h/mes |
|---|---:|---:|---:|---:|---:|
| Web nueva | 690 | 25 | 14 / 20 / 24 | 575,00 | 0,40 |
| Retoque web actual | 290 | 10 | 7 / 10 / 12 | 287,50 | 0,20 |
| Agenda del equipo | 450 | 15 | 25 / 33 / 41 | 948,75 | 0,60 |
| Fichas de clientas, CRM | 350 | 8 | 15 / 20 / 25 | 575,00 | 0,30 |
| Caja y facturación, ERP básico | 300 | 7 | 17 / 23 / 29 | 661,25 | 0,45 |
| Reservas en la web | 540 | 20 | 38 / 51 / 64 | 1.466,25 | 0,80 |
| WhatsApp que reserva | 490 | 30 | 27 / 36 / 45 | 1.035,00 | 0,90 |
| Bonos regalo | 290 | 10 | 19 / 26 / 32 | 747,50 | 0,30 |
| Opiniones en Google | 350 | 12 | 6 / 9 / 11 | 258,75 | 0,20 |
| Lista de espera | 190 | 5 | 13 / 18 / 22 | 517,50 | 0,20 |
| Cumpleaños y retoques | 190 | 10 | 11 / 15 / 18 | 431,25 | 0,35 |
| Señal en citas largas | 390 | 12 | 14 / 19 / 24 | 546,25 | 0,30 |
| App para clientas | 490 | 10 | 19 / 25 / 31 | 718,75 | 0,30 |
| Venta de cremas / tienda | 590 | 15 | 29 / 38 / 46 | 1.092,50 | 0,75 |
| Agente telefónico | 590 | 49 | 25 / 34 / 43 | 977,50 | 1,10 |
| WhatsApp dudas + recuperar clientas | 340 | 18 | 15 / 20 / 25 | 575,00 | 0,60 |
| Informes del centro | 190 | 10 | 11 / 15 / 18 | 431,25 | 0,30 |
| Gestión de ficha Google | 0 | 49 | 4 / 5 / 6 | 143,75 | 2,00 |
| Facturas y gestoría | Sin fijar | Sin fijar | 16 / 24 / 36 | 690,00 | 0,50 |

La gestión de Google tiene trabajo inicial aunque la tarifa comercial vigente marque alta cero. El ERP no presupone desarrollar una solución fiscal propia. La integración con un proveedor de facturación es la línea «Facturas y gestoría» y debe delimitarse antes de prometerla.

### Base técnica común: contar una vez

Para activar módulos con datos reales hace falta una base compartida: estructura de datos, autenticación y permisos, configuración de entornos, control de acceso, tareas programadas, registros de errores, copias y prueba de recuperación, y despliegue inicial. Estimación **32 / 40 / 50 horas**; en el escenario base son **1.150 € de trabajo incluida la reserva**, más **1,5 h/mes** de supervisión técnica.

Se añade una vez al conjunto que necesita backend, no a cada módulo. La web estática, el retoque y la gestión de Google por sí solos no la requieren. Los módulos se estiman incrementales sobre ella; sus horas de soporte se suman a la supervisión común porque atienden reglas y flujos específicos.

No confundir la base técnica con licencias: compartir desarrollo y servidor evita duplicaciones, pero alojamiento, base de datos y consumos siguen teniendo costes.

## Alcance mínimo por producto y límites

### 1. Web nueva

Terminar la web actual con textos, precios, fotos y dirección validados; adaptar móvil y escritorio; revisar navegación, rendimiento básico, enlaces, metadatos y publicación. Incluye dos rondas de revisión. La reserva puede aparecer como enlace a un sistema externo; una reserva propia con datos reales pertenece al módulo de reservas.

No incluye producir una sesión fotográfica, vídeo nuevo, rediseñar toda la marca, crear contenidos continuos ni garantizar posiciones en Google. El prototipo existente reduce horas, pero no sustituye la validación comercial. Dependencia comercial y técnica: ninguna de los otros módulos.

### 2. Retoque de la web actual

Actualizar textos, tarifas, fotos y datos en la web del Kit Digital accesible, con revisión móvil de las páginas intervenidas. El cálculo supone acceso funcional y una tecnología que permita esos cambios sin reconstruirla.

No incluye migración de plataforma, rediseño completo, resolver una instalación deteriorada ni añadir el sistema propio. La propuesta actual bloquea todos los extras al escoger retoque: es una **regla comercial**; no significa que técnicamente sea imposible enlazar herramientas externas desde una web existente.

### 3. Agenda del equipo

Agenda adaptable al móvil, vista por profesional, alta y modificación manual de citas, horarios, ausencias y reglas de conflicto, con acceso limitado por rol. Se configura un centro y hasta cinco profesionales.

No incluye fichaje laboral, varias sedes, optimización automática compleja ni sincronización con Treatwell. La disponibilidad por cabina es una ampliación a concretar si sus recursos tienen restricciones distintas de las del profesional. Necesita base técnica. La web nueva es requisito del configurador, pero no una necesidad técnica universal de una agenda interna.

### 4. Fichas de clientas, CRM

Contactos, historial de citas, notas, campos mínimos acordados e importación CSV normalizada. Se revisa quién puede leer y modificar la información y qué datos necesita realmente el centro.

No se incluye una historia clínica, migración masiva de fotografías, firma de consentimientos ni tratamiento de archivos sin límites. Las alergias que menciona la oferta requieren decidir su necesidad y acceso antes de recogerlas. Necesita base técnica; se integra con agenda para que las citas alimenten el historial.

### 5. Caja y facturación, ERP básico

Registro del cobro de cada cita y su medio de pago, pendientes, cierre diario y exportación sencilla. La facturación se realiza mediante la herramienta existente o un enlace a ella; el conector automático se presupone en la línea siguiente de gestoría.

No incluye contabilidad completa, conciliación bancaria, integración con cualquier datáfono ni motor fiscal propio. La palabra «facturación» de la oferta actual debe aclararse al concretar el contrato para evitar prometer dos veces lo mismo. Necesita base técnica y datos de los servicios/cobros; **no es un requisito técnico para que exista una reserva**.

### 6. Reservas en la web

Formulario de servicio, profesional, fecha y hora conectado a disponibilidad real; comprobación transaccional para impedir dobles reservas; cancelación o cambio por enlace según reglas acordadas; confirmación y recordatorio. Se incluye la automatización de esos avisos una sola vez en este módulo. Para cubrir la promesa actual de «un agente», se añade un asistente conversacional web acotado que utiliza las mismas operaciones de consulta/reserva y ofrece el formulario o derivación cuando no puede resolver la petición.

Necesita agenda, datos mínimos de clienta, base técnica y proveedor del canal de avisos. La propuesta exige seleccionar además CRM y ERP; esa es la dependencia comercial vigente. El cobro/ERP no es necesario para ofrecer una reserva sin pago.

Las **51 horas base** incluyen 39 horas de flujo transaccional/automatizaciones y una estimación adicional de 12 horas para el agente web acotado, sus controles y pruebas. No se presupone conversación libre ilimitada ni se incluye asesoramiento sobre cualquier tema. Su consumo de IA se calcula aparte. Una variante basada solo en formulario podría ahorrar **8–16 horas, 12 horas base**, pero requiere ajustar el texto comercial para dejar de prometer un agente web. El agente de WhatsApp tiene su propia fila por la conexión y operación de ese canal.

### 7. WhatsApp que reserva

Conectar un número de empresa y un proveedor de WhatsApp; atender peticiones acotadas, consultar huecos, reservar, cambiar o cancelar, y derivar a una persona cuando no pueda resolverlas. Incluye pruebas de los escenarios acordados y plantillas necesarias para esos flujos.

Necesita reservas y agenda operativas. No incluye conversaciones ilimitadas, disponibilidad humana permanente, asesoramiento clínico ni responder sobre cualquier tema. Los avisos de confirmación y recordatorio ya incluidos en reservas no se vuelven a cobrar como desarrollo. Mensajes, plantillas y consumo de IA sí se imputan según uso real. La verificación y aprobación de proveedores puede alargar calendario sin equivaler a horas de programación.

### 8. Bonos regalo

Compra mediante checkout alojado, código único, saldo/uso y consulta básica del bono. Se acuerdan modalidades, caducidad, canje y operación de devoluciones. La estimación usa un proveedor de pago existente.

Necesita base técnica y pagos; no necesariamente agenda si el centro canjea el bono manualmente. No incluye contabilidad fiscal propia, programas de fidelización complejos ni múltiples comercios. Comisiones de pago y eventuales incidencias no son cero por utilizar checkout alojado.

### 9. Opiniones en Google

Solicitud neutral de reseña tras la cita, enlace correcto a la ficha, límite de frecuencia y diseño de un QR para mostrador. El envío se aplica sin seleccionar solo clientas satisfechas.

Necesita una cita terminada y el canal de envío. La placa física tiene una provisión de **25 € de compra directa** en este análisis, separada de las horas; se sustituye por el presupuesto real de placa, impresión y envío cuando se conozca. No incluye comprar opiniones, eliminar críticas ni gestionar todas las respuestas: esa gestión pertenece a Google mensual.

### 10. Lista de espera

Registrar interés por servicio/franja, detectar una cancelación, ofrecer el hueco a una persona y caducar la oferta antes de pasar a la siguiente. Se evita adjudicar la misma cita dos veces.

Necesita reservas y un canal de aviso. No incluye subastas, priorización compleja, campañas masivas ni prometer que todos los huecos se cubrirán. El consumo de mensajes se suma al común sin duplicar una franquicia imaginaria por módulo.

### 11. Cumpleaños y retoques

Dos flujos acordados: cumpleaños y recordatorio de retoque según una fecha/regla definida. Incluye plantillas aprobadas, selección del destinatario, exclusiones y registro de envíos.

Necesita fechas fiables, datos de clientas, canal y preferencias de comunicación. No incluye un calendario de marketing completo, diseño mensual de campañas ni segmentación ilimitada. La estimación no supone que todas las clientas puedan recibir promociones automáticamente.

### 12. Señal en citas largas

Checkout alojado para una señal, vinculación con la cita, plazo para pagar, liberación del hueco cuando proceda y reglas acordadas de cancelación/devolución. Se prueban los avisos de pago y los reintentos del proveedor para no duplicar operaciones.

Necesita reservas y proveedor de pago. No incluye negociar reclamaciones, devolver manualmente cualquier pago ni asumir comisiones. El importe de las señales es dinero del centro, no ingreso de NOVORA por prestar este módulo.

### 13. App para clientas

Aplicación web instalable, PWA, con acceso a citas y, si se contratan bonos, a su saldo; funciones de reserva y consulta sobre los servicios ya construidos. La estimación cubre la experiencia y autenticación de la clienta, no vuelve a construir el motor de reservas.

Necesita reservas y base técnica; para mostrar bonos también necesita bonos. La propuesta no refleja esta última dependencia condicional. No incluye aplicaciones nativas en App Store/Google Play ni notificaciones push complejas. Debe venderse expresamente como PWA si ese es el alcance elegido.

### 14. Venta de cremas / tienda

Catálogo de hasta 20 referencias con datos e imágenes suministrados, stock básico, pago alojado, recogida en el centro y registro de ventas presenciales necesario para ajustar existencias. El alcance del modelo integra el stock y los datos de tienda con el sistema compartido del centro; por eso activa la base técnica común una vez.

Necesita base técnica y proveedor de pago o plataforma de comercio. No incluye transporte, integraciones de almacén, TPV a medida, múltiples tiendas ni cargar un catálogo extenso. La oferta antigua menciona envío a domicilio: si se desea, se añade la configuración logística y sus costes. La falta de requisito de ERP en el configurador no elimina la necesidad de acordar cómo se registran las ventas. Una tienda autónoma en una plataforma alojada, sin integrar el stock con el sistema propio, es una alternativa de alcance que puede evitar esa base a medida; requiere recalcular horas y licencia, no reutilizar sin cambios este presupuesto integrado.

### 15. Agente telefónico

Un proveedor de voz alojado, número o desvío, conversación acotada para información y reservas, derivación humana y pruebas de llamadas. Consulta el mismo motor de disponibilidad que los demás canales.

Necesita reservas, proveedor de voz/telefonía y decisiones sobre número y transferencias. No incluye minutos ilimitados, call center humano ni garantías de comprensión de cualquier llamada. El coste debe depender de minutos, modelos, telefonía y extras elegidos, no solo de una cuota fija de 49 €.

### 16. WhatsApp que resuelve dudas y recupera clientas

Base de preguntas y respuestas aprobadas sobre servicios y cuidados, con límites claros y derivación; un segmento de reactivación y una secuencia acordada para clientas que llevan tiempo sin venir.

Necesita WhatsApp y datos/historial utilizables. La oferta agrupa ambas capacidades en **un solo módulo de 340 € + 18 €/mes**. No se debe sumar una segunda fila de «Recuperar clientas» por el mismo trabajo. No incluye asesoramiento sanitario personalizado, campañas ilimitadas ni redacción continua de materiales.

### 17. Informes del centro

Cuatro a seis indicadores acordados a partir de los datos disponibles: citas, cobros, servicios, recurrencia y canales cuando estén registrados. Incluye filtros básicos y exportación sencilla.

Necesita datos fiables: la facturación requiere caja/cobros, y el origen de clientas requiere capturarlo. Reservas por sí solo no garantiza todos los indicadores prometidos. No incluye una plataforma de inteligencia de negocio completa, atribución publicitaria avanzada ni reconstruir datos históricos inexistentes.

### 18. Gestión de ficha Google

Alta operativa/revisión inicial de acceso y datos; después, hasta dos publicaciones al mes y diez respuestas a reseñas, usando fotos y material facilitados por el centro. El escenario estima dos horas mensuales de trabajo.

No necesita el backend propio, aunque la propuesta permite añadirlo solo con web nueva. No incluye fotografía presencial, publicidad pagada, atender crisis de reputación ni garantizar posiciones en el buscador. Con dos horas de soporte a 25 €/h, sin reserva adicional mensual, el trabajo estimado cuesta **50 €/mes**, por encima de los 49 € de la cuota actual; reducirla exige reducir y explicitar la dedicación o elevar la productividad real medida.

### 19. Facturas y gestoría

Un conector a la API documentada de un proveedor existente elegido con la gestoría, mapeo de los datos y una exportación o entrega acordada. Las 24 horas base son provisionales hasta confirmar proveedor, acceso API, flujos y responsabilidad de cada parte.

Necesita cobros/datos del negocio, proveedor compatible y validación del flujo con la gestoría. Licencias, acceso API y servicios externos quedan por cotizar. No incluye crear un motor de facturación fiscal, certificar cumplimiento legal ni integrar cualquier programa. La referencia a VERI*FACTU de la demo antigua no es prueba de que esté implementado ni garantía que pueda darse con este repositorio.

## Dependencias y piezas que no se deben cobrar dos veces

| Concepto visto en el catálogo | Tratamiento correcto |
|---|---|
| Confirmación y recordatorio | Incluido en desarrollo de reservas; mensajes como consumo variable |
| WhatsApp que resuelve dudas + recuperar clientas | Una sola oferta `recuperar` |
| Agenda + CRM + ERP + reservas | Cuatro módulos distintos; alta conjunta vigente 1.640 € y mantenimiento 50 €/mes |
| Web + los cuatro anteriores | Alta vigente 2.330 € y mantenimiento 75 €/mes |
| Autenticación, base de datos y despliegue compartidos | Base técnica común una sola vez |
| Servidor y base de datos del centro | Coste común del conjunto; no una licencia completa repetida por módulo |
| App clientas | Interfaz PWA; usa reservas y bonos ya construidos |
| Gestión Google y solicitud de reseñas | Gestión editorial mensual y automatización de solicitud son trabajos diferentes |
| Caja y «Facturas y gestoría» | Caja/cierre por un lado; conector a proveedor fiscal por otro, con alcance explícito |

La propuesta bloquea extras sin web nueva y exige agenda, CRM y ERP antes de reservas. Son reglas del configurador vigente. Al presupuestar deben distinguirse esas reglas de las necesidades técnicas: una agenda interna podría funcionar sin web nueva, una reserva sin pago podría funcionar sin ERP, y una integración externa puede ofrecer otra alternativa de alcance.

## Proveedores, consumo y compras

Precios públicos consultados con referencia al **22 de octubre de 2026**. Son referencias de tarifa, no facturas del proyecto ni garantías de precio futuro. Deben confirmarse para la cuenta, región, plan, volumen y configuración contratados. Para presupuestar se usa **0,92 € por USD como hipótesis ilustrativa**, no como tipo de cambio verificado. Los importes siguientes excluyen impuestos y efectos de divisa.

| Proveedor | Referencia pública | Uso en el cálculo |
|---|---|---|
| [Vercel](https://vercel.com/pricing) | Pro desde 20 USD/mes; Hobby tiene restricciones de uso comercial | 18,40 €/mes con el cambio supuesto, antes de excesos/asientos y según contratación. No convertirlo en coste fijo universal si se elige otro hosting. |
| [Supabase](https://supabase.com/pricing) | Pro desde 25 USD/mes, primer proyecto incluido según el plan | 23 €/mes con el cambio supuesto, más extras/consumos aplicables. No duplicarlo por cada módulo. |
| [Twilio WhatsApp](https://www.twilio.com/en-us/whatsapp/pricing) | 0,005 USD por mensaje entrante o saliente, más los cargos de plantillas de Meta aplicables | Parte Twilio: 0,0046 € por mensaje al cambio supuesto. Añadir la parte Meta por país/categoría y condiciones. |
| [Stripe España](https://stripe.com/es/pricing) | 1,5 % + 0,25 € por operación para tarjetas estándar del EEE | Aplicar solo a esa categoría. Otras tarjetas, divisas y servicios pueden tener otra tarifa. |
| [Retell](https://www.retellai.com/pricing) | Precio variable según configuración y consumo | Introducir el coste efectivo de voz, modelo, telefonía y extras elegidos. No se fija aquí una tarifa por minuto no verificada. |

### Provisiones y volúmenes usados en el análisis

Estos importes son **hipótesis internas para no ocultar partidas**, no tarifas oficiales ni costes acreditados. Se utilizan en este análisis y deben sustituirse por presupuestos, contrato y consumo previsto de la clienta. En especial, las licencias de tienda y gestoría siguen **sin proveedor ni tarifa confirmados**.

| Hipótesis | Valor inicial | Interpretación |
|---|---:|---|
| Plantilla Meta de utilidad | 0,02 €/plantilla | Provisión sin validar para país/categoría; aparte de Twilio |
| Plantilla Meta de marketing | 0,06 €/plantilla | Provisión sin validar para país/categoría; aparte de Twilio |
| IA | 0,02 €/interacción | Provisión media, no precio por token ni tarifa oficial de un modelo |
| Voz | 0,15 €/minuto | Provisión media de voz/telefonía; sustituir por la combinación real y evitar contar de nuevo componentes incluidos |
| Placa QR | 25 € una vez | Compra pendiente de presupuesto, solo al seleccionar reseñas |
| Dominio | 20 €/año | Provisión imputada a 1,67 €/mes con web nueva |
| Correo transaccional | 5 €/mes | Provisión cuando se activa el backend |
| Licencia de tienda | 20 €/mes | **Importe desconocido**: provisión orientativa, no oferta de plataforma |
| Número de teléfono | 3 €/mes | Provisión, solo con agente telefónico |
| Licencia de gestoría/facturación | 25 €/mes | **Importe desconocido**: provisión hasta elegir proveedor y acceso API |

| Módulo | Mensajes facturados por Twilio/mes | Plantillas utilidad/mes | Plantillas marketing/mes | Interacciones IA/mes | Minutos voz/mes |
|---|---:|---:|---:|---:|---:|
| Reservas web y avisos | 600 | 300 | 0 | 100 | 0 |
| WhatsApp que reserva | 1.000 | 0 | 0 | 300 | 0 |
| Opiniones Google | 150 | 0 | 150 | 0 | 0 |
| Lista de espera | 40 | 40 | 0 | 0 | 0 |
| Cumpleaños y retoques | 100 | 0 | 100 | 0 | 0 |
| Agente telefónico | 0 | 0 | 0 | 0 | 150 |
| Dudas y recuperar clientas | 100 | 0 | 100 | 100 | 0 |
| **Todos estos módulos** | **1.990** | **340** | **350** | **500** | **150** |

Las columnas Meta representan plantillas ya incluidas dentro de los mensajes de la primera columna; se separan porque tienen un cargo adicional, no porque sean conversaciones nuevas. El cero de una categoría es una hipótesis de uso y clasificación, no prueba de exención: si el flujo real genera otra categoría, hay que cambiar la cantidad. Las interacciones de IA tampoco equivalen necesariamente a una única llamada al modelo.

Con todos esos módulos, los consumos de ejemplo suman **69,45 €/mes**: 9,154 € de Twilio, 6,80 € de plantillas utilidad, 21 € de marketing, 10 € de IA y 22,50 € de voz. La suma conserva los decimales de cálculo aunque se muestre redondeada.

Ejemplo de comisión: una transacción de 50 € con tarjeta estándar del EEE a la tarifa indicada supone `50 × 1,5 % + 0,25 = 1 €`. Esa comisión debe asignarse al centro o a NOVORA según el contrato. No debe descontarse automáticamente del margen de NOVORA si la paga directamente el centro, ni ignorarse si NOVORA la absorbe.

La configuración inicial calcula **40 operaciones/mes y 2.000 € de volumen**, que dan **40 €/mes de comisión orientativa**. En este análisis se consideran **pagadas directamente por el centro**, fuera del coste y del margen de NOVORA, cuando se contratan bonos, señales o tienda. Si NOVORA las absorbe, hay que incorporarlas expresamente a sus costes; el cálculo actual no lo hace automáticamente.

El escenario Vercel Pro + Supabase Pro suma **41,40 €/mes** al cambio ilustrativo, antes de dominio, correo, consumos y otros servicios. Es una opción de infraestructura de referencia, no una obligación de usar esos dos planes para cualquier configuración.

Con dominio y correo de las provisiones, la infraestructura común del sistema completo suma **48,07 €/mes**. Dominio, correo, IA, Meta, voz, licencias y placa tienen números orientativos en el modelo, pero todavía requieren datos reales. Almacenamiento adicional/fotos, fotografía, desplazamientos y asistencia externa también necesitan valoración cuando apliquen. **Un campo a cero o vacío no demuestra que ese coste sea cero**; puede significar que falta cotizarlo.

La demo antigua menciona 600 avisos y 500 conversaciones incluidos; la propuesta vigente no define esa franquicia. No debe utilizarse como supuesto de coste o compromiso comercial sin decidir antes qué se incluye, qué mide el proveedor y qué sucede al superar el límite.

## Cómo ajustar el presupuesto con este desglose

1. Elegir una de las dos webs y solo los módulos realmente necesarios. Activar la base técnica una vez cuando haya funciones con datos reales.
2. Reemplazar el coste/hora de 25 € por el que resulte de tus gastos y capacidad facturable. Ajustar las horas por experiencia, reutilización y alcance confirmado.
3. Introducir compras únicas, cuotas y consumo previsto. Señalar qué paga la clienta directamente para no tratarlo como coste absorbido por NOVORA.
4. Mantener una reserva razonada para incidencias de construcción. El 15 % es una hipótesis sobre trabajo, no una garantía ni una medida del riesgo real.
5. Elegir margen de venta y comprobar alta y mantenimiento por separado. Una cuota rentable no resuelve automáticamente una construcción financiada a pérdidas.
6. Comparar con las tarifas vigentes, que ya llevan descuento, y comprobar la caja que exige cobrar el desarrollo durante 12 meses.

Fórmulas usadas en este informe (la calculadora de la web solo multiplica horas × €/h):

`Coste de trabajo = horas × coste interno/hora`

`Coste de alta previsto = coste de trabajo × (1 + reserva) + compras y costes directos de alta`

`Precio para un margen sobre venta = coste de alta previsto / (1 − margen)`

`Coste mensual previsto = horas de soporte × coste interno/hora + proveedores y consumo absorbidos`

`Precio de alta por tarifa/hora = [horas × (1 + reserva) × tarifa de venta/hora + costes directos] × (1 − descuento)`

`Precio mensual por tarifa/hora = horas de soporte × tarifa de venta/hora + proveedores y consumo absorbidos`

En la configuración inicial, la tarifa de venta es **35 €/h**, el descuento nuevo es **0 %** y el margen objetivo es **20 %**. La reserva y el descuento se aplican a la construcción; la cuota mensual calculada por tarifa/hora no recibe esos incrementos o descuentos. El descuento del 25 % mencionado en la propuesta ya está dentro de los precios vigentes, y no se vuelve a aplicar a estos valores de referencia.

Para comparar descuentos, llamar `P0` al precio de alta calculado por tarifa/hora antes del descuento y `C` al coste de alta previsto:

`Descuento máximo para no perder = 1 − C / P0`

`Descuento máximo para conservar el margen objetivo m = 1 − C / [(1 − m) × P0]`

El primer límite solo conserva un margen cero. El segundo conserva el margen objetivo y suele permitir menos descuento. Si cualquiera sale negativo, el precio de partida ya es insuficiente para ese criterio; no hay descuento admisible y hay que subir tarifa o reducir coste/alcance. Son límites del modelo sobre los costes incluidos, no incluyen financiación, impago ni otras partidas pendientes.

Margen sobre venta y recargo sobre coste no son iguales: sobre un coste de 100 €, un margen del 20 % requiere un precio de 125 €. Si se calcula a partir de una tarifa de venta por hora, comprobar que el resultado cubre los costes anteriores; no llamar beneficio a la diferencia antes de proveedores y soporte.

Con todos los módulos tarifados, la previsión de soporte es **11,35 horas/mes**, incluida la supervisión común una vez. A 25 €/h, **sin reserva adicional mensual**, son **283,75 €/mes de trabajo**. Sumando infraestructura común (48,07 €), provisiones de tienda y número telefónico (23 €) y consumos (69,45 €), el coste mensual estimado es **424,27 €**, frente a los **305 €/mes actuales**. Las comisiones de pago directas del centro quedan fuera. Es una advertencia económica del escenario base, no un gasto ya medido.

El paquete de ejemplo —web, agenda, CRM, caja y reservas, con base técnica— suma **187 horas**, **5.376,25 € de coste de alta previsto** y **160,08 €/mes**, frente a los **2.330 € de alta y 75 €/mes** vigentes para ese paquete. Incluye el agente web acotado y los volúmenes de uso de reservas de la tabla anterior. No incluye la placa porque ese paquete no selecciona reseñas.

El conjunto completo tarifado tiene **334 / 447 / 554 horas** mínima/base/máxima, incluida la base técnica y excluyendo el retoque alternativo. Si además se añade la integración de gestoría, pasa a **350 / 471 / 590 horas**, con una tarifa comercial de gestoría todavía sin definir.

Al seleccionar gestoría, los **6.430 € y 305 €/mes visibles como tarifas conocidas son solo un subtotal**: no representan el precio de venta del conjunto con gestoría. El coste estimado del conjunto con gestoría sí suma su trabajo y licencia provisional, pero no permite afirmar un beneficio de venta mientras falte su tarifa. Ninguno de estos escenarios es un total de coste real hasta registrar tiempos, compras y consumos.

## Trabajo que puede cambiar el presupuesto

Antes de cerrar importes conviene resolver datos y alcance, porque pueden mover más el coste que un descuento pequeño:

- Catálogo definitivo de tratamientos, precios, duración, profesional y cabina. La limpieza de una carta incoherente y CSV de clientas puede añadir trabajo: como orientación de alcance adicional, 6–20 horas si requiere depuración, no incluidas automáticamente en todos los módulos.
- Accesos al dominio, web existente, WhatsApp, ficha Google, pasarela y herramientas actuales. La espera por accesos afecta calendario; no todo ese tiempo es trabajo facturable.
- Comportamiento de Treatwell y otras agendas. No se promete sincronización sin acceso y API confirmados; mantener dos agendas manualmente también tiene un coste operativo para el centro.
- Preparación de correo y entregabilidad, plantillas WhatsApp, portabilidad/verificación del número, reglas de devolución y resolución de incidencias de pagos.
- Datos que se necesitan, usuarios con acceso, conservación y flujos de atención. El alcance técnico no constituye una revisión jurídica ni una declaración de cumplimiento.
- Cambios de contenidos, nuevas rondas de revisión, restauraciones por incidentes, soporte a la clienta y cambios de modelos/proveedores.
- El pago en 12 cuotas implica adelantar trabajo. Coste financiero, impago y gestión de cobro deben estimarse por separado si se desea medir el margen total del contrato.

## Oportunidades adicionales, sin tarifa vigente

El catálogo anterior cubre todo lo ofrecido en el repositorio actual. No pretende ser una lista universal de cualquier servicio que NOVORA pudiera vender. Estas ampliaciones son relevantes para este centro y se presupuestan solo si aportan valor:

| Oportunidad | Cuándo tiene sentido | Relación con el presupuesto actual |
|---|---|---|
| Configurar una herramienta externa de reservas y enlazarla desde la web | Para empezar con menor desarrollo propio | Alternativa a construir agenda/CRM/ERP/reservas; requiere estudiar licencias y límites, no sumarla automáticamente a todo el sistema |
| Agenda por cabina/equipo y bloqueos avanzados | Si varios tratamientos comparten recursos | Ampliación de agenda/reservas; mencionada en la demo antigua |
| Fotografías de evolución y consentimientos | Si el centro concreta necesidad, acceso y flujo | Ampliación de CRM; no incluida en la estimación de contactos/notas |
| Fichaje y gestión de jornada | Si quieren sustituir su herramienta actual | Producto aparte; la maqueta antigua lo muestra, pero no está implementado ni en el alcance base |
| Migración/limpieza extraordinaria de datos | Si exportaciones y carta requieren preparación manual | Trabajo adicional delimitado; no duplicar la importación CSV normalizada ya prevista |
| Sincronización con Treatwell u otra plataforma | Solo con integración viable y autorización de acceso | Estudio previo y presupuesto posterior; no prometer API disponible |
| Ampliación del agente web a nuevas tareas | Si aparecen conversaciones o acciones fuera de la reserva acotada | El agente básico de reserva ya está incluido; nuevas tareas y pruebas requieren ampliar alcance |
| Envíos de tienda, catálogo amplio o TPV especializado | Cuando la venta de productos lo justifique | Ampliaciones de tienda; 20 referencias y recogida son el alcance base |
| Fotografía, vídeo nuevo y contenido recurrente | Si el material actual no basta | Producción/servicio editorial separado con compras y dedicación propias |
| Publicidad y captación pagada | Si se decide invertir en adquisición | Gestión y presupuesto publicitario separados; sin promesa de resultados |

Para bajar la inversión inicial, la secuencia más contenida es terminar la web y enlazar una reserva externa existente, medir el uso y después activar la base propia con los módulos que generen ahorro o ventas suficientes. Si se construye el sistema propio completo, las integraciones y el soporte son trabajo real aunque las pantallas ya estén dibujadas.

## Referencias internas y trazabilidad

- `README.md`: estructura, reglas comerciales, precios pendientes y descripción de la demo heredada.
- `África MG Castellón/index.html`, líneas 408–429: precios vigentes y dependencias; líneas 527–556: correspondencia del catálogo; condiciones del resumen: descuento incluido y ausencia de IVA.
- `África MG Castellón/demo/index.html`, líneas 993–995 y 1085–1100: configuración vacía, catálogo actual y respuestas simuladas.
- `África MG Castellón/demo-reservas.html`, líneas 1006–1241: simulación local; líneas 1284–1313: alcances y precios de una versión antigua, no tarifas vigentes.
- `vercel.json`: publicación estática y cabeceras de la propuesta.

Las horas, costes internos, reserva y límites de servicio de este informe son estimaciones de planificación elaboradas para la revisión del 22 de octubre de 2026. Se deben actualizar con alcance aceptado, tiempos registrados y facturas reales tras cada entrega.
