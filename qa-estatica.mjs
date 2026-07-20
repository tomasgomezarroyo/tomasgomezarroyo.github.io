import { access, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const raiz = fileURLToPath(new URL('./dist/', import.meta.url));
const paginas = [
  'index.html',
  'travesia.html',
  'buques.html',
  'buques/jj-sister.html',
  'capitulo/capitulo-sexto.html',
  'epilogo.html',
  'sobre-esta-edicion.html',
];

const errores = [];
for (const pagina of paginas) {
  const html = await readFile(join(raiz, pagina), 'utf8');
  if (!html.includes('id="cabecera-sitio"')) errores.push(`${pagina}: falta navegación principal`);
  if (!html.includes('data-tamano-global')) errores.push(`${pagina}: falta control de letra`);
  if (/<a\b[^>]*href=["']https?:\/\//i.test(html)) errores.push(`${pagina}: contiene un enlace externo`);
  for (const coincidencia of html.matchAll(/<img[^>]+src=["'](\/[^"']+)["']/gi)) {
    try { await access(join(raiz, coincidencia[1])); }
    catch { errores.push(`${pagina}: falta la imagen ${coincidencia[1]}`); }
  }
}

const galeria = await readFile(join(raiz, 'buques/jj-sister.html'), 'utf8');
for (const texto of ['Ampliar fotografía', 'Anterior', 'Siguiente', 'Tamaño original', 'data-zoom']) {
  if (!galeria.includes(texto)) errores.push(`galería: falta ${texto}`);
}

if (errores.length) {
  console.error(errores.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`QA estática correcta: ${paginas.length} páginas, navegación, letra, imágenes y lupa.`);
}

