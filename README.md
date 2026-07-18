# Memorias de Tomás Gómez Arroyo

Sitio estático con las memorias del Vicealmirante Tomás Gómez Arroyo (Las Palmas, 1921 - 2001), escritas por él mismo entre 1991 y 1995. Proyecto familiar.

## Cómo funciona

- **Astro** genera el sitio estático. `npm run dev` para desarrollo, `npm run build` para producción (sale a `dist/`).
- El texto de los capítulos vive fuera del sitio, en `../02-texto/capitulos-corregidos/*.md` (con respaldo original en `capitulos-original/`).
- `scripts/sync_capitulos.py` convierte esos textos a fragmentos HTML en `src/generado/`, intercalando las fotos definidas en `scripts/capitulos-meta.json` (pie, crédito y posición) y las fichas de `scripts/fichas.json` (título, datos, historia del visor). Correr tras cualquier cambio de texto, foto o ficha.
- Las fotos se copian desde `../04-fotos/` a `public/fotos/`. El detalle de fuentes y licencias de cada imagen está en `../04-fotos/MANIFIESTO.md`.
- `scripts/screenshots.mjs` captura pantallas de control de calidad en `scripts/qa/` (requiere `npx astro preview` corriendo y Playwright instalado).

## Flujo de actualización típico

```
python scripts/sync_capitulos.py
npm run build
```

## Publicación

Cloudflare Pages, proyecto `tomasgomezarroyo` (URL: tomasgomezarroyo.pages.dev).

```
npx wrangler pages deploy dist
```

## Reglas editoriales

- El texto del autor no se toca: solo se corrigieron erratas de transcripción (las dudas están en `../02-texto/DUDAS-para-revision-final.md`).
- Los textos del sitio escritos por el editor no llevan guiones largos ni lenguaje de folleto.
- Toda foto histórica lleva pie y crédito de fuente; las de archivo llevan además ficha en el visor.
