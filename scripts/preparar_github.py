# -*- coding: utf-8 -*-
"""Prepara el build estático de GitHub Pages sin desactivar el Libro de visitas."""
import os
import shutil
from pathlib import Path

BASE = Path(__file__).resolve().parent
SITIO = BASE.parent
ORIGEN = SITIO / 'dist'
DESTINO = SITIO / 'dist-github'

if not ORIGEN.is_dir():
    raise SystemExit('Falta dist/. Ejecuta primero npm run build.')
if DESTINO.parent != SITIO or DESTINO.name != 'dist-github':
    raise SystemExit('Destino GitHub no válido.')


def permitir_eliminacion(funcion, ruta, _error):
    os.chmod(ruta, 0o666)
    funcion(ruta)


if DESTINO.exists():
    shutil.rmtree(DESTINO, onexc=permitir_eliminacion)
shutil.copytree(ORIGEN, DESTINO)
(DESTINO / '.nojekyll').write_text('', encoding='utf-8')

# Cloudflare sirve audio y vídeo con Functions en /media/. GitHub Pages usa
# los archivos públicos directamente; el frontend del Libro sigue apuntando al
# backend remoto mediante PUBLIC_API_ORIGIN.
extensiones_texto = {'.html', '.js', '.css', '.json', '.xml', '.txt', '.svg'}
for ruta in DESTINO.rglob('*'):
    if not ruta.is_file() or ruta.suffix.lower() not in extensiones_texto:
        continue
    try:
        texto = ruta.read_text(encoding='utf-8')
    except UnicodeDecodeError:
        continue
    nuevo = texto.replace('/media/narracion/', '/audio/narracion/')
    nuevo = nuevo.replace('/media/familia/', '/audio/familia/')
    if nuevo != texto:
        ruta.write_text(nuevo, encoding='utf-8')

# Astro produce archivos .html porque Cloudflare los resuelve como rutas
# limpias. GitHub Pages también recibe una copia index.html para cada ruta
# limpia, sin alterar los enlaces ni duplicar ningún medio.
for pagina in list(DESTINO.rglob('*.html')):
    if pagina.name == 'index.html' or pagina.name == '404.html':
        continue
    limpia = pagina.parent / pagina.stem / 'index.html'
    limpia.parent.mkdir(exist_ok=True)
    shutil.copy2(pagina, limpia)

print(f'Build GitHub preparado en {DESTINO}')
