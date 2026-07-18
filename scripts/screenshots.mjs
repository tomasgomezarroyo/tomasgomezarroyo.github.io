// Captura de pantallas para control de calidad visual.
import { chromium } from 'playwright';

const BASE = 'http://localhost:4321';
const OUT = 'scripts/qa';
const paginas = [
  { ruta: '/', nombre: 'portada' },
  { ruta: '/', nombre: 'portada-indice', scroll: 'bottom' },
  { ruta: '/capitulo/prologo', nombre: 'prologo' },
  { ruta: '/capitulo/capitulo-primero', nombre: 'cap1-arriba' },
  { ruta: '/capitulo/capitulo-primero', nombre: 'cap1-lamina', scroll: 1800 },
  { ruta: '/travesia', nombre: 'travesia' },
  { ruta: '/buques', nombre: 'buques' },
  { ruta: '/epilogo', nombre: 'epilogo' },
  { ruta: '/epilogo', nombre: 'epilogo-cierre', scroll: 'bottom' },
];

const browser = await chromium.launch();
for (const vp of [{ w: 1360, h: 850, tag: 'desktop' }, { w: 390, h: 844, tag: 'movil' }]) {
  const page = await browser.newPage({ viewport: { width: vp.w, height: vp.h } });
  for (const p of paginas) {
    await page.goto(BASE + p.ruta, { waitUntil: 'networkidle' });
    if (p.scroll === 'bottom') {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(400);
    } else if (typeof p.scroll === 'number') {
      await page.evaluate((y) => window.scrollTo(0, y), p.scroll);
      await page.waitForTimeout(400);
    }
    await page.screenshot({ path: `${OUT}/${p.nombre}-${vp.tag}.png` });
  }
  // visor abierto (clic en primera lámina del cap. 1)
  await page.goto(BASE + '/capitulo/capitulo-primero', { waitUntil: 'networkidle' });
  const btn = page.locator('figure.lamina .abre-visor').first();
  if (await btn.count()) {
    await btn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: `${OUT}/visor-${vp.tag}.png` });
  }
  await page.close();
}
await browser.close();
console.log('Capturas listas en', OUT);
