# -*- coding: utf-8 -*-
"""Genera los fragmentos HTML de los capítulos para el sitio.

Toma cada capítulo desde 02-texto/capitulos-corregidos/*.md si existe;
si no, cae al respaldo 02-texto/capitulos-original/*.txt (con reunión
ingenua de líneas). Estos archivos proceden de una transcripción familiar,
no del manuscrito del autor. Intercala las figuras definidas en
capitulos-meta.json y escribe src/generado/<slug>.html más indice.json.

Se puede correr las veces que haga falta: es idempotente.
"""
import json
import os
import re
import html as htmllib
from PIL import Image

BASE = os.path.dirname(os.path.abspath(__file__))
SITIO = os.path.dirname(BASE)
PROYECTO = os.path.dirname(SITIO)
CORREGIDOS = os.path.join(PROYECTO, "02-texto", "capitulos-corregidos")
ORIGINALES = os.path.join(PROYECTO, "02-texto", "capitulos-original")
SALIDA = os.path.join(SITIO, "src", "generado")
os.makedirs(SALIDA, exist_ok=True)

with open(os.path.join(BASE, "capitulos-meta.json"), encoding="utf-8") as f:
    META = json.load(f)["capitulos"]

FICHAS = {}
ruta_fichas = os.path.join(BASE, "fichas.json")
if os.path.exists(ruta_fichas):
    with open(ruta_fichas, encoding="utf-8") as f:
        FICHAS = json.load(f)


def desde_original(path):
    """Reunión ingenua de líneas duras del PDF: cada bloque en un párrafo."""
    with open(path, encoding="utf-8") as f:
        crudo = f.read()
    # primera línea suele ser el título
    lineas = crudo.splitlines()
    titulo = lineas[0].strip()
    cuerpo = " ".join(l.strip() for l in lineas[1:] if l.strip())
    # cortar en párrafos aproximados: tras punto seguido de mayúscula, cada ~5 frases
    frases = re.split(r"(?<=[.!?…])\s+(?=[A-ZÁÉÍÓÚÑ¡¿«\-])", cuerpo)
    parrafos, actual = [], []
    for fr in frases:
        actual.append(fr)
        if len(actual) >= 5:
            parrafos.append(" ".join(actual))
            actual = []
    if actual:
        parrafos.append(" ".join(actual))
    md = "## " + titulo + "\n\n" + "\n\n".join(parrafos)
    return md, False


def md_a_bloques(md):
    """Convierte el markdown sencillo de los correctores a bloques HTML."""
    bloques = []
    for bloque in re.split(r"\n\s*\n", md.strip()):
        b = bloque.strip()
        if not b:
            continue
        if b.startswith("## "):
            continue  # el título lo pone la plantilla
        if b.startswith("#"):
            continue
        if b.startswith(">"):
            contenido = " ".join(l.lstrip("> ").strip() for l in b.splitlines())
            bloques.append(("blockquote", contenido))
        else:
            contenido = " ".join(l.strip() for l in b.splitlines())
            bloques.append(("p", contenido))
    return bloques


def inline(texto):
    t = htmllib.escape(texto, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"\*(.+?)\*", r"<em>\1</em>", t)
    return t


def dimensiones(ruta_relativa):
    """Ancho/alto reales del archivo, para reservar espacio y evitar saltos de layout."""
    ruta = os.path.join(SITIO, "public", "fotos", ruta_relativa)
    with Image.open(ruta) as im:
        return im.size


def preparar_fotos(fotos, bloques, slug):
    """Resuelve anclas semánticas y valida que cada foto tenga ubicación."""
    preparadas = []
    for original in fotos:
        f = dict(original)
        ancla = f.get("despues_de")
        if ancla:
            coincidencias = [
                i for i, (_, contenido) in enumerate(bloques)
                if ancla.casefold() in contenido.casefold()
            ]
            if len(coincidencias) != 1:
                raise ValueError(
                    f"{slug}: la ancla de foto {ancla!r} produjo "
                    f"{len(coincidencias)} coincidencias; debe producir una"
                )
            f["pos"] = coincidencias[0] + 1
        if "pos" not in f:
            raise ValueError(f"{slug}: foto sin 'despues_de' ni 'pos': {f.get('archivo')}")
        preparadas.append(f)
    return sorted(preparadas, key=lambda f: f["pos"])


def slug_foto(archivo):
    """Identificador estable para una foto, a partir de su nombre de archivo."""
    base = os.path.splitext(os.path.basename(archivo.replace("\\", "/")))[0]
    return re.sub(r"[^a-z0-9-]+", "-", base.lower()).strip("-")


def figura(f, capitulo_slug):
    src = "/fotos/" + f["archivo"].replace("\\", "/")
    pie = htmllib.escape(f["pie"], quote=False)
    credito = htmllib.escape(f["credito"], quote=False)
    alt = htmllib.escape(f["pie"].split(".")[0], quote=True)
    ancho, alto = dimensiones(f["archivo"])
    ficha = FICHAS.get(f["archivo"])
    attr_ficha = ""
    if ficha:
        carga = dict(ficha)
        carga["credito"] = f["credito"]
        attr_ficha = ' data-ficha="' + htmllib.escape(json.dumps(carga, ensure_ascii=False), quote=True) + '"'
    foto_id = "foto-" + slug_foto(f["archivo"])
    galeria_html = ""
    galeria = f.get("galeria")
    if galeria:
        href = "/" + galeria.strip("/")
        sustantivo = "este buque" if galeria.startswith("buques/") else "este lugar"
        # "volver" y "foto" le dicen a la página de galería adónde regresar exactamente
        # (el capítulo y la foto concreta), para que el lector no pierda su sitio.
        query = f"?volver={capitulo_slug}&foto={foto_id}"
        galeria_html = (
            f'<a class="ver-galeria" href="{htmllib.escape(href + query, quote=True)}">'
            f"Ver más fotografías de {sustantivo} &rarr;</a>"
        )
    return (
        f'<figure class="lamina" id="{foto_id}"{attr_ficha}>'
        f'<button type="button" class="abre-visor" aria-label="Ampliar fotografía: {alt}">'
        f'<img src="{src}" width="{ancho}" height="{alto}" alt="{alt}" loading="lazy" decoding="async" />'
        f"</button>"
        f'<figcaption>{pie} <span class="credito">{credito}</span></figcaption>'
        f"{galeria_html}"
        f"</figure>"
    )


indice = []
for meta in META:
    corregido = os.path.join(CORREGIDOS, meta["archivo"] + ".md")
    original = os.path.join(ORIGINALES, meta["archivo"] + ".txt")
    if os.path.exists(corregido):
        with open(corregido, encoding="utf-8") as f:
            md = f.read()
        es_corregido = True
    else:
        md, es_corregido = desde_original(original)

    bloques = md_a_bloques(md)
    fotos = preparar_fotos(meta.get("fotos", []), bloques, meta["slug"])

    # repartir fotos: en su posición pedida (índice de párrafo) o al final
    piezas = []
    fot_idx = 0
    for i, (tag, contenido) in enumerate(bloques):
        while fot_idx < len(fotos) and fotos[fot_idx].get("pos", 999) <= i:
            piezas.append(figura(fotos[fot_idx], meta["slug"]))
            fot_idx += 1
        piezas.append(f"<{tag}>{inline(contenido)}</{tag}>")
    while fot_idx < len(fotos):
        piezas.append(figura(fotos[fot_idx], meta["slug"]))
        fot_idx += 1

    with open(os.path.join(SALIDA, meta["slug"] + ".html"), "w", encoding="utf-8") as f:
        f.write("\n".join(piezas))

    indice.append({
        "slug": meta["slug"],
        "titulo": meta["titulo"],
        "subtitulo": meta.get("subtitulo", ""),
        "periodo": meta["periodo"],
        "lugares": meta["lugares"],
        "resumen": meta["resumen"],
        "aviso": meta.get("aviso", ""),
        "corregido": es_corregido,
        "parrafos": len(bloques),
        "fotos": len(fotos),
    })

with open(os.path.join(SALIDA, "indice.json"), "w", encoding="utf-8") as f:
    json.dump(indice, f, ensure_ascii=False, indent=2)

pendientes = [c["slug"] for c in indice if not c["corregido"]]
print(f"Generados {len(indice)} capítulos en {SALIDA}")
print("Desde texto CORREGIDO:", len(indice) - len(pendientes))
if pendientes:
    print("Aún desde original (pendientes de corrector):", ", ".join(pendientes))
