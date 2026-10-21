# Propuesta África MG · NOVORA

Página de propuesta para África MG en tres pestañas: **Tu web**, **Tu propuesta** y **Catálogo**. Se publica en Vercel tal cual, sin build.

## Estructura

```
africamg/
├── vercel.json                ← publica la carpeta «África MG Castellón», cabeceras y noindex
└── África MG Castellón/
    ├── index.html             ← la propuesta (pestañas, configurador de precio y catálogo)
    ├── demo-reservas.html     ← demo de reservas, WhatsApp con IA y panel (viene de la v21)
    └── demo/
        ├── index.html         ← la web de África (vista previa que se ve dentro de la propuesta)
        └── assets/
            ├── img/           ← fotos del centro y del equipo (.webp) y cabina.jpg para compartir
            └── video/         ← recorrido del centro
```

## Verlo en local

Desde la carpeta `África MG Castellón`: `python3 -m http.server` y abrir `http://localhost:8000`.
O con la extensión Live Server de VS Code, abriendo esa carpeta.

## Publicar

Cada push a `main` se publica solo si el repo está importado en Vercel. Desde la terminal: `vercel --prod` en la raíz del repo.
Todo se sirve con `X-Robots-Tag: noindex`, así que Google no indexa la propuesta.

## Dónde se cambia cada cosa (`index.html`)

- **Precios del configurador**: en el script, `BASE` (la web) y `OPCIONES`. Cada pieza tiene `precio` (puesta en marcha), `empezar` (entrada), `cuota` (12 cuotas), `mant` (mantenimiento mensual) y `semanas`. Regla: `empezar + 12 × cuota = precio`.
- **Dependencias**: `req` en cada opción (por ejemplo, el WhatsApp necesita las reservas).
- **Catálogo (sin precios)**: `CATALOGO`. El campo `en` enlaza cada tarjeta con su opción del configurador.
- **Colores y tipografía**: variables del bloque `:root` al principio del `<style>`.
- **Textos de cabecera, validez y número de propuesta**: directamente en el HTML.

## Precios de la carta (`demo/index.html`)

Cada precio está repetido en: la línea de la carta (`data-precio` y el texto), `AMG_DATOS.servicios`, el JSON-LD `hasOfferCatalog`, la sección de micropigmentación y, para el retoque y el Plasma Pen, las preguntas frecuentes (HTML y JSON-LD).

## Pendiente

- Revisar precios de la carta en `demo/index.html` (no cuadran con Treatwell: microblading 200 € frente a 150 €, manicura 11 € frente a 22 €).
- Cambiar la dirección por la del local nuevo cuando se sepa.
- Validar los precios de las piezas pequeñas del configurador antes de enseñarlo.
