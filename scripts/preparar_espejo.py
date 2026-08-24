# -*- coding: utf-8 -*-
"""Prepara una copia estática del sitio para un alojamiento ajeno a Cloudflare.

Parte de dist/, conserva fotografías, audios y vídeos, cambia las rutas /media/
por sus archivos estáticos reales y guarda una instantánea pública del Libro de
visitas en modo de solo lectura.
"""
import json
import os
import shutil
import stat
import urllib.request
from pathlib import Path

BASE = Path(__file__).resolve().parent
SITIO = BASE.parent
ORIGEN = SITIO / "dist"
DESTINO = SITIO / "dist-espejo"
URL_PUBLICACIONES = "https://tomasgomezarroyo.pages.dev/api/publicaciones"

if not ORIGEN.is_dir():
    raise SystemExit("Falta dist/. Ejecuta primero npm run build.")

if DESTINO.parent != SITIO or DESTINO.name != "dist-espejo":
    raise SystemExit("Destino de espejo no válido.")

def permitir_eliminacion(funcion, ruta, _error):
    os.chmod(ruta, stat.S_IWRITE)
    funcion(ruta)


if DESTINO.exists():
    shutil.rmtree(DESTINO, onexc=permitir_eliminacion)
shutil.copytree(ORIGEN, DESTINO)
(DESTINO / ".nojekyll").write_text("", encoding="utf-8")

extensiones_texto = {".html", ".js", ".css", ".json", ".xml", ".txt", ".svg"}
for ruta in DESTINO.rglob("*"):
    if not ruta.is_file() or ruta.suffix.lower() not in extensiones_texto:
        continue
    try:
        texto = ruta.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        continue
    nuevo = texto.replace("/media/narracion/", "/audio/narracion/")
    nuevo = nuevo.replace("/media/familia/", "/audio/familia/")
    if nuevo != texto:
        ruta.write_text(nuevo, encoding="utf-8")

peticion = urllib.request.Request(
    URL_PUBLICACIONES,
    headers={"User-Agent": "Memorias-TGA-espejo/1.0"},
)
try:
    with urllib.request.urlopen(peticion, timeout=30) as respuesta:
        publicaciones = json.load(respuesta)
except Exception as exc:
    print(f"Aviso: no se pudo actualizar el Libro de visitas ({exc}).")
    publicaciones = {"publicaciones": []}

datos = DESTINO / "datos"
datos.mkdir(exist_ok=True)
(datos / "publicaciones.json").write_text(
    json.dumps(publicaciones, ensure_ascii=False, indent=2),
    encoding="utf-8",
)

guion = DESTINO / "js" / "libro-visitas.js"
if guion.exists():
    texto = guion.read_text(encoding="utf-8")
    original = (
        "async function api(url, options = {}) { const response = await fetch(url, options); "
        "let data = {}; try { data = await response.json(); } catch {} if (!response.ok) "
        "throw Object.assign(new Error(data.error || 'request'), { code: data.error, "
        "status: response.status }); return data; }"
    )
    reemplazo = (
        "async function api(url, options = {}) { "
        "const metodo = String(options.method || 'GET').toUpperCase(); "
        "if (url === '/api/publicaciones' && metodo === 'GET') { "
        "const response = await fetch('/datos/publicaciones.json'); "
        "if (!response.ok) throw new Error('request'); return await response.json(); } "
        "throw Object.assign(new Error('soloLectura'), { code: 'soloLectura' }); }"
    )
    if original not in texto:
        raise SystemExit("No se encontró la función API esperada del Libro de visitas.")
    texto = texto.replace(original, reemplazo)
    aviso = """
if (root && document.documentElement.dataset.espejo === 'estatico') {
  const aviso = document.createElement('aside');
  aviso.className = 'aviso-espejo';
  aviso.innerHTML = '<strong>Copia alternativa de lectura</strong><span>Las memorias, fotografías, audios y firmas están disponibles. Para añadir una firma nueva hay que usar temporalmente la dirección principal.</span>';
  root.prepend(aviso);
  document.querySelectorAll('[data-form-mensaje], [data-form-foto], [data-verificacion-acciones]').forEach((elemento) => { elemento.hidden = true; });
}
"""
    texto = texto.replace("if (root) {", aviso + "\nif (root) {", 1)
    guion.write_text(texto, encoding="utf-8")

libro = DESTINO / "libro-de-visitas.html"
if libro.exists():
    texto = libro.read_text(encoding="utf-8")
    estilos = """<style>
.aviso-espejo{display:grid;gap:.35rem;margin:0 auto 1.5rem;padding:1rem 1.1rem;border:1px solid #c8a85f;border-left:4px solid #c8a85f;background:#f3ead7;color:#152a40}
.aviso-espejo strong{font-family:var(--f-display);font-size:1.25rem}
.aviso-espejo span{font-size:.9rem;line-height:1.5}
html[data-espejo='estatico'] .acciones-entrada,html[data-espejo='estatico'] .acciones-respuesta{display:none!important}
</style>"""
    texto = texto.replace("</head>", estilos + "</head>", 1)
    libro.write_text(texto, encoding="utf-8")

for ruta in DESTINO.glob("*.html"):
    texto = ruta.read_text(encoding="utf-8")
    texto = texto.replace("<html lang=\"es\"", "<html lang=\"es\" data-espejo=\"estatico\"", 1)
    ruta.write_text(texto, encoding="utf-8")
for ruta in DESTINO.rglob("*.html"):
    if ruta.parent == DESTINO:
        continue
    texto = ruta.read_text(encoding="utf-8")
    texto = texto.replace("<html lang=\"es\"", "<html lang=\"es\" data-espejo=\"estatico\"", 1)
    ruta.write_text(texto, encoding="utf-8")

print(f"Espejo preparado en {DESTINO}")
print(f"Firmas incluidas: {len(publicaciones.get('publicaciones', []))}")
