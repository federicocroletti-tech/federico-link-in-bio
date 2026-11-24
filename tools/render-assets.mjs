// Rigenera QR code, immagine social, copertine delle storie in evidenza e PDF di stampa.
// Uso (dalla radice del repo):
//   npm i --no-save playwright qrcode
//   node tools/render-assets.mjs
// Se il browser di Playwright non è installato: PW_CHANNEL=chrome node tools/render-assets.mjs
import { chromium } from 'playwright';
import QRCode from 'qrcode';
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const BASE_URL = 'https://federicocroletti-tech.github.io/federico-link-in-bio/';
const file = (...p) => path.join(root, ...p);
const url = (...p) => pathToFileURL(file(...p)).href;

// Un QR per supporto, così si capisce quale funziona meglio.
const qrTargets = {
  biglietto: `${BASE_URL}?utm_source=offline&utm_medium=qr&utm_content=biglietto`,
  volantino: `${BASE_URL}?utm_source=offline&utm_medium=qr&utm_content=volantino`,
};

for (const [name, target] of Object.entries(qrTargets)) {
  const svg = await QRCode.toString(target, { type: 'svg', errorCorrectionLevel: 'M', margin: 0, color: { dark: '#0b1821', light: '#ffffff' } });
  await writeFile(file('social', 'qr', `${name}.svg`), svg);
}

const browser = await chromium.launch({ channel: process.env.PW_CHANNEL || undefined });

async function screenshot(page, target, out, options = {}) {
  await page.goto(target);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, ...options });
}

{
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await screenshot(page, url('social', 'og-image.html'), file('assets', 'og.jpg'), { type: 'jpeg', quality: 90 });
  await page.close();
}

{
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
  for (const name of ['servizi', 'progetti', 'assistenza', 'contatto']) {
    await screenshot(page, `${url('social', 'highlights.html')}?c=${name}`, file('social', 'highlights', `${name}.png`));
  }
  await page.close();
}

{
  const page = await browser.newPage();
  for (const name of ['biglietto', 'volantino']) {
    await page.goto(url('social', 'print', `${name}.html`));
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: file('social', 'print', `${name}.pdf`), preferCSSPageSize: true, printBackground: true });
  }
  await page.close();
}

await browser.close();
console.log('Asset rigenerati.');
