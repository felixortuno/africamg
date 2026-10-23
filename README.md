# Propuesta África MG · NOVORA

Página de propuesta para África MG en cuatro pestañas: **Tu web**, **Tu propuesta**, **Catálogo** y **Calculadora**. Se publica en Vercel tal cual, sin build.

## Estructura

```
africamg/
├── vercel.json                ← publica la carpeta «África MG Castellón», cabeceras y noindex
└── África MG Castellón/
    ├── index.html             ← la propuesta (pestañas, configurador de precio y catálogo)
    ├── demo-reservas.html     ← demo de reservas, WhatsApp con IA y panel (viene de la v21)
    ├── assets/                ← fotos (img/, con cabina.jpg para compartir), vídeo y recorrido;
    │                            logo de NOVORA en img/novora.svg (vector), novora-logo.png (1180 px) y novora-180.png (icono)
    └── demo/
        └── index.html         ← la web de África (vista previa dentro de la propuesta); usa ../assets/
```

## Verlo en local

Desde la carpeta `África MG Castellón`: `python3 -m http.server` y abrir `http://localhost:8000`.
O con la extensión Live Server de VS Code, abriendo esa carpeta.

## Publicar

Cada push a `main` se publica solo si el repo está importado en Vercel. Desde la terminal: `vercel --prod` en la raíz del repo.
Todo se sirve con `X-Robots-Tag: noindex`, así que Google no indexa la propuesta.

## Dónde se cambia cada cosa (`index.html`)

- **Precios del configurador**: en el script, `BASES` (se elige una: `nueva`, la web nueva, o `retoque`, lo mínimo, retocar la web actual del Kit Digital) y `OPCIONES`. Cada pieza tiene `precio` (puesta en marcha), `empezar` (entrada), `cuota` (12 cuotas), `mant` (mantenimiento mensual) y `semanas`. Regla: `empezar + 12 × cuota = precio`.
- **Dependencias**: `req` en cada opción es la lista de lo que tiene que estar elegido antes. Mientras falte algo, la opción queda bloqueada y dice qué falta; al quitar una pieza se quitan las que dependen de ella. La propuesta tiene tres apartados: Web (nueva o retoque), Importantes y Extras. En Importantes, el sistema de reservas en tu web necesita la agenda (app interna), las fichas (CRM) y la caja (ERP); el WhatsApp y casi todos los extras necesitan el sistema de reservas. Con el retoque de la web actual no se puede elegir nada más.
- **Catálogo (sin precios)**: `CATALOGO`. El campo `en` enlaza cada tarjeta con su opción del configurador.
- **Colores y tipografía**: variables del bloque `:root` al principio del `<style>`.
- **Textos de cabecera, validez y número de propuesta**: directamente en el HTML.
- **Resumen en PDF (tipo albarán)**: botón «Guardar resumen en PDF» en «Lo que pagas». La hoja es la sección `#albaran` al final del HTML: número, cliente y condiciones se cambian ahí; las líneas, los totales, el plazo y la fecha se rellenan solos con lo elegido. Sale al imprimir o al guardar como PDF desde el navegador.

## Precios de la carta (`demo/index.html`)

Cada precio está repetido en: la línea de la carta (`data-precio` y el texto), `AMG_DATOS.servicios`, el JSON-LD `hasOfferCatalog`, la sección de micropigmentación y, para el retoque y el Plasma Pen, las preguntas frecuentes (HTML y JSON-LD).

## Desglose interno de costes

En [`internal-costs/DESGLOSE.md`](internal-costs/DESGLOSE.md) está el análisis de las 19 ofertas, con rangos de horas, alcance y costes estimados. Son hipótesis de planificación, no costes reales registrados. El informe queda fuera de la publicación de Vercel.

La pestaña **Calculadora** (`#calculadora`) de la propia propuesta tiene solo dos campos: horas y precio por hora. El total se actualiza al escribir y admite decimales.

## Pendiente

- Revisar precios de la carta en `demo/index.html` (no cuadran con Treatwell: microblading 200 € frente a 150 €, manicura 11 € frente a 22 €).
- Cambiar la dirección por la del local nuevo cuando se sepa.
- Validar los precios de las piezas pequeñas del configurador antes de enseñarlo.
- Confirmar el precio del retoque de la web actual (provisional: 290 € = 50 € + 12 × 20 €, 10 €/mes, 2 semanas).
- Confirmar el reparto de precios entre agenda (450 €), fichas (350 €), caja (300 €) y sistema de reservas en tu web (540 €): sale de las antiguas «Reservas online» (990 €) y «Fichas de clientas y caja» (650 €), así que con las cuatro el total es el mismo.
