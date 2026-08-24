"""Extrae el texto narrativo puro de un fragmento generado (05-sitio/src/generado/{slug}.html)
para alimentar la sintesis de voz: solo los parrafos de Tomas, sin titulos, sin bajadas de
fotos (figcaption), sin creditos ni enlaces "Ver mas fotografias". Los botones "enlace-foto"
dentro de un parrafo conservan su texto (son palabras del propio Tomas) pero se descarta el
icono decorativo (span aria-hidden).

Uso: python extraer-texto-narracion.py <slug>
Busca en ../src/generado/<slug>.html e imprime el texto plano por stdout,
un parrafo por linea en blanco entre medio.
"""

import sys
import re
from html.parser import HTMLParser
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent / "src" / "generado"


def normalizar_para_voz(texto: str) -> str:
    """Expande tratamientos solo en el guion de narración."""
    sustituciones = (
        (r"\bD\.ª(?=\s+[A-ZÁÉÍÓÚÜÑ])", "doña"),
        (r"\bD\.(?=\s+[A-ZÁÉÍÓÚÜÑ])", "don"),
        (r"\bSra\.(?=\s+[A-ZÁÉÍÓÚÜÑ])", "señora"),
        (r"\bSr\.(?=\s+[A-ZÁÉÍÓÚÜÑ])", "señor"),
    )
    for patron, reemplazo in sustituciones:
        texto = re.sub(patron, reemplazo, texto)
    return texto


class ExtractorNarrativo(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parrafos = []
        self._buffer = []
        self._profundidad_parrafo = 0
        self._saltar_pila = []  # pila de booleanos: True si el tag actual (o un ancestro) debe omitirse

    def _omitiendo(self):
        return any(self._saltar_pila)

    def handle_starttag(self, tag, attrs):
        attrs_d = dict(attrs)
        omitir = tag == "figure" or attrs_d.get("aria-hidden") == "true"
        self._saltar_pila.append(omitir)
        if tag in ("p", "blockquote") and self._profundidad_parrafo == 0 and not self._omitiendo():
            self._profundidad_parrafo = 1
            self._buffer = []
        elif tag in ("p", "blockquote") and self._profundidad_parrafo > 0:
            self._profundidad_parrafo += 1

    def handle_startendtag(self, tag, attrs):
        attrs_d = dict(attrs)
        omitir = tag == "figure" or attrs_d.get("aria-hidden") == "true"
        self._saltar_pila.append(omitir)
        self._saltar_pila.pop()

    def handle_endtag(self, tag):
        if self._saltar_pila:
            self._saltar_pila.pop()
        if tag in ("p", "blockquote") and self._profundidad_parrafo > 0:
            self._profundidad_parrafo -= 1
            if self._profundidad_parrafo == 0:
                texto = "".join(self._buffer)
                texto = re.sub(r"\s+", " ", texto).strip()
                if texto:
                    self.parrafos.append(normalizar_para_voz(texto))
                self._buffer = []

    def handle_data(self, data):
        if self._profundidad_parrafo > 0 and not self._omitiendo():
            self._buffer.append(data)


def extraer(slug: str) -> list[str]:
    ruta = RAIZ / f"{slug}.html"
    html = ruta.read_text(encoding="utf-8")
    ext = ExtractorNarrativo()
    ext.feed(html)
    return ext.parrafos


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Uso: python extraer-texto-narracion.py <slug>", file=sys.stderr)
        sys.exit(1)
    for p in extraer(sys.argv[1]):
        print(p)
        print()
