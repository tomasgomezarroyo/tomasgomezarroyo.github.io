# Sitio Memorias de Tomás Gómez Arroyo

Este directorio es la raíz real del proyecto web y del repositorio Git.

## Límites de exploración

Ignora durante búsquedas e inspecciones:

- `node_modules/`
- `.git/`
- `dist/`
- `.astro/`
- `.wrangler/`
- `scripts/qa/`
- `public/audio/`
- imágenes y otros binarios de `public/`, salvo que la tarea los mencione
- `paquete-publicacion-*.zip`

Usa búsquedas dirigidas dentro de `src/`, `functions/`, `scripts/` y `migrations/`. No recorras el directorio padre `Memorias Abuelo/`.

## Protección del trabajo existente

El árbol de trabajo contiene cambios y archivos nuevos que deben conservarse.

- Inspecciona `git status --short` antes de editar.
- No descartes, reviertas ni reformatees cambios ajenos a la tarea.
- No uses `git reset`, `git clean`, `git checkout --` ni equivalentes.
- No hagas commits, pushes, migraciones remotas o despliegues sin autorización explícita.

## Desarrollo y verificación

- Aplicación: Astro.
- Instalación reproducible: `npm ci` sólo si faltan dependencias o se solicita.
- Desarrollo: `npm run dev`.
- Verificación normal después de editar código: `npm run build`.
- Vista previa: `npm run preview` sólo cuando sea necesaria.
- No mantengas servidores de desarrollo o vista previa ejecutándose al terminar.
- Evita `npx wrangler` salvo para una tarea de Cloudflare expresamente pedida.

Haz cambios pequeños y localizados. Si una tarea requiere regenerar muchos archivos de `src/generado/`, explica primero el alcance y evita mezclar esa regeneración con cambios manuales no relacionados.