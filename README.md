# Federico Croletti — Link in bio

Landing page statica pensata per il link del profilo Instagram
`@federico.croletti.tech`. Racconta chi sono, cosa costruisco, mostra alcuni
progetti e raccoglie le richieste di contatto aprendo WhatsApp con un messaggio
già compilato.

Pagina pubblicata: <https://federicocroletti-tech.github.io/federico-link-in-bio/>

Nessuna build e nessun backend: la pagina è HTML, CSS e JavaScript in un solo
file. Gli strumenti in `tools/` servono solo a rigenerare le immagini.

## Struttura

| Percorso | Contenuto |
|---|---|
| `index.html` | Pagina completa (stili e script inclusi) |
| `artigiani.html` | Pagina per artigiani e piccole attività, usata dai messaggi di contatto diretto (stessi stili e tracciamento) |
| `assets/` | Foto, logo, immagine social `og.jpg`, font Plus Jakarta Sans e Source Serif 4 |
| `social/` | Sorgenti HTML e output di copertine in evidenza, QR, biglietto da visita e volantino |
| `docs/` | Guide per profilo Instagram, calendario contenuti, Google Business Profile, testimonianze, statistiche |
| `tools/render-assets.mjs` | Rigenera QR, immagine social, copertine e PDF di stampa |

## Guide

- [Profilo Instagram](docs/profilo-instagram.md): bio, link, post fissati, evidenze, routine.
- [Calendario contenuti](docs/calendario-contenuti.md): 4 settimane con i materiali già pronti.
- [Google Business Profile](docs/google-business-profile.md): scheda locale con testi pronti.
- [Testimonianze](docs/testimonianze.md): come chiederle e dove inserirle.
- [Statistiche](docs/statistiche.md): Plausible, eventi e link con UTM.

## Anteprima locale

```powershell
node -e "require('http').createServer((q,s)=>require('fs').createReadStream('.'+(q.url.split('?')[0]==='/'?'/index.html':q.url.split('?')[0])).on('error',()=>{s.statusCode=404;s.end()}).pipe(s)).listen(8765)"
```

Poi apri <http://localhost:8765>. In locale le statistiche non vengono inviate.

## Come funziona il form

Il form non invia dati a un server. Al submit costruisce un messaggio e apre
`https://wa.me/<numero>?text=...`; l'invio resta una scelta del visitatore.
Il numero è la costante `WA_NUMBER` in fondo a `index.html`.

## Personalizzare

- Foto: sostituire `assets/federico.webp` (meglio verticale o quadrata).
- Testi: sezioni `hero`, `La mia storia`, `Quello che costruisco`, `Cosa ho realizzato`.
- Testimonianze: costante `TESTIMONIALS` in `index.html`; la sezione compare
  solo quando contiene almeno un elemento.
- Colori: variabili CSS in `:root`. Navy e menta dal sito personale, slate e
  verde dal logo.

## Rigenerare immagini e PDF

Dopo aver modificato i file in `social/` (o il dominio della pagina):

```powershell
npm i --no-save playwright qrcode
node tools/render-assets.mjs
```

Se il browser di Playwright non è installato: `$env:PW_CHANNEL="chrome"` prima
del comando. Se cambi dominio, aggiorna `BASE_URL` nello script e rigenera i QR
**prima** di stampare.

## Pubblicazione

La pagina è servita da GitHub Pages (branch `main`, cartella `/`): ogni push su
`main` la aggiorna. Funziona su qualsiasi hosting statico (Netlify, Render
Static Site, Vercel).

## Tracciamento del traffico

Usare nel link del profilo l'URL con UTM indicato in
[docs/statistiche.md](docs/statistiche.md) per distinguere le visite dalla bio
da quelle di altre sorgenti.
