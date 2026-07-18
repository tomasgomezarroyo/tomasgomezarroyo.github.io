# -*- coding: utf-8 -*-
"""Genera los fragmentos HTML de los capítulos para el sitio.

Toma cada capítulo desde 02-texto/capitulos-corregidos/*.md si existe;
si no, cae al original 02-texto/capitulos-original/*.txt (con reunión
ingenua de líneas). Intercala las figuras definidas en capitulos-meta.json
y escribe src/generado/<slug>.html más src/generado/indice.json.

Se puede correr las veces que haga falta: es idempotente.
"""
import json
import os
import re
import html as htmllib

BASE = os.path.dirname(os.path.abspath(__file__))
SITIO = os.path.dirname(BASE)
PROYECTO = os.path.dirname(SITIO)
CORREGIDOS = os.path.join(PROYECTO, "02-texto", "capitulos-corregidos")
ORIGINALES = os.path.join(PROYECTO, "02-texto", "capitulos-original")
SALIDA = os.path.join(SITIO, "src", "generado")
os.makedirs(SALIDA, exist_ok=True)

with open(os.path.join(BASE, "capitulos-meta.json"), encoding="utf-8") as f:
    META = json.load(f)["capitulos"]


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


def figura(f):
    src = "/fotos/" + f["archivo"].replace("\\", "/")
    pie = htmllib.escape(f["pie"], quote=False)
    credito = htmllib.escape(f["credito"], quote=False)
    alt = htmllib.escape(f["pie"].split(".")[0], quote=True)
    return (
        f'<figure class="lamina">'
        f'<img src="{src}" alt="{alt}" loading="lazy" decoding="async" />'
        f'<figcaption>{pie} <span class="credito">{credito}</span></figcaption>'
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
    fotos = sorted(meta.get("fotos", []), key=lambda f: f.get("pos", 999))

    # repartir fotos: en su posición pedida (índice de párrafo) o al final
    piezas = []
    fot_idx = 0
    for i, (tag, contenido) in enumerate(bloques):
        while fot_idx < len(fotos) and fotos[fot_idx].get("pos", 999) <= i:
            piezas.append(figura(fotos[fot_idx]))
            fot_idx += 1
        piezas.append(f"<{tag}>{inline(contenido)}</{tag}>")
    while fot_idx < len(fotos):
        piezas.append(figura(fotos[fot_idx]))
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
