# Memorias de Tomás Gómez Arroyo

Sitio estático familiar con las memorias de Tomás Gómez Arroyo, escritas entre 1991 y 1995. La fuente disponible es una transcripción familiar de escritos anteriores, no un manuscrito autógrafo ni un facsímil.

Antes de trabajar, leer `../00-MANUAL-DEL-PROYECTO.md` y `../00-BITACORA-DE-CAMBIOS.md` en la raíz del proyecto.

## Capas que no deben confundirse

- `../01-fuente/`: transcripción PDF y extracción; solo lectura.
- `../02-texto/capitulos-original/`: primera división de la transcripción; respaldo.
- `../02-texto/capitulos-corregidos/`: versión de trabajo que alimenta la web. No modificar sin cotejo documental o decisión familiar explícita.
- `../03-investigacion/`: informes y referencias, incluidos datos pendientes de confirmar.
- `../04-fotos/`: biblioteca maestra y manifiesto de procedencia/derechos.
- `src`, `scripts`: código y metadatos del sitio.

No atribuir automáticamente al autor una falta, grafía o frase incompleta: puede proceder de la transcripción. Las dudas se registran en `../02-texto/DUDAS-para-revision-final.md` y no se resuelven por intuición.

## Cómo funciona

- Astro genera el sitio estático. `npm run dev` inicia el entorno local y `npm run build` crea `dist/`.
- `scripts/sync_capitulos.py` convierte los Markdown de capítulos en fragmentos HTML de `src/generado/` e intercala las figuras de `scripts/capitulos-meta.json` y fichas de `scripts/fichas.json`.
- `src/data/buques.ts` es la fuente única para las fichas y galerías de buques.
- `src/data/carrera.ts` es la fuente única para Travesía y el epílogo documental.
- `src/data/archivo-familiar.ts` recibe únicamente fotografías ya identificadas y autorizadas para publicación; nunca los originales de ingreso.
- `src/data/narraciones.ts` reserva la estructura para audio auténtico o recreado y obliga a rotular ambos tipos por separado.
- `../04-fotos/MANIFIESTO.md` conserva procedencia y derechos de cada imagen. Las referencias se muestran en la web como texto, nunca como enlaces externos.

El script de capítulos **no copia fotografías**. Las imágenes maestras se conservan en `../04-fotos/`; las versiones web deben copiarse o generarse de forma controlada en `public/fotos/`.

## Actualización normal

```text
python -m pip install -r requirements.txt
python scripts/sync_capitulos.py
npm run build
```

Después revisar: portada, un capítulo con fotos, un capítulo sin fotos, Travesía, Buques, una galería y Epílogo; tanto en escritorio como en móvil.

La comprobación sin navegador se ejecuta con:

```text
node qa-estatica.mjs
```

Esta prueba verifica navegación, control de letra, ausencia de enlaces externos, imágenes y controles de la lupa. No sustituye la revisión visual en móvil y escritorio.

## Publicación

Cloudflare Pages, proyecto `tomasgomezarroyo`:

```text
npx wrangler pages deploy dist
```

La publicación es un paso separado y requiere autorización. Este proyecto no tiene actualmente un remoto Git configurado.

## Archivos generados

No editar a mano:

- `src/generado/`
- `dist/`
- `.astro/`
- `.wrangler/`
- `node_modules/`
- capturas de `scripts/qa/`

## Fotografías nuevas

El material familiar entra por `../06-entrada-familia/00-sin-revisar/`. Tras identificar personas, lugar, fecha, procedencia y autorización, se crea una copia curada en `../04-fotos/familia/`. El archivo original no se retoca ni se reemplaza.
