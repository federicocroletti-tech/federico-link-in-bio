# Federico Croletti — Link in bio

Landing page statica pensata per il link del profilo Instagram
`@federico.croletti.tech`. Racconta chi sono, cosa costruisco, mostra alcuni
progetti e raccoglie le richieste di contatto aprendo WhatsApp con un messaggio
già compilato.

Nessuna build, nessuna dipendenza e nessun backend: HTML, CSS e JavaScript in un
solo file.

## Struttura

| Percorso | Contenuto |
|---|---|
| `index.html` | Pagina completa (stili e script inclusi) |
| `assets/federico.webp` | Foto hero |
| `assets/logo.webp` | Logo FC |
| `assets/fonts/` | Plus Jakarta Sans e Source Serif 4 (stessi font del portfolio) |

## Anteprima locale

```powershell
node -e "require('http').createServer((q,s)=>require('fs').createReadStream('.'+(q.url.split('?')[0]==='/'?'/index.html':q.url.split('?')[0])).on('error',()=>{s.statusCode=404;s.end()}).pipe(s)).listen(8765)"
```

Poi apri <http://localhost:8765>.

## Come funziona il form

Il form non invia dati a un server. Al submit costruisce un messaggio e apre
`https://wa.me/<numero>?text=...`; l'invio resta una scelta del visitatore.
Il numero è la costante `WA_NUMBER` in fondo a `index.html`.

## Personalizzare

- Foto: sostituire `assets/federico.webp` (meglio verticale o quadrata).
- Testi: sezioni `hero`, `La mia storia`, `Quello che costruisco`, `Cosa ho realizzato`.
- Colori: variabili CSS in `:root`. Navy e menta dal sito personale, slate e
  verde dal logo.

## Pubblicazione

Qualsiasi hosting statico: Netlify, Render Static Site, GitHub Pages o Vercel.
Su Netlify basta collegare il repo (nessun comando di build, directory `/`).

## Tracciamento del traffico da Instagram

Usare nel link del profilo un URL con UTM, per distinguere le visite dalla bio:

```
https://<dominio>/?utm_source=instagram&utm_medium=social&utm_content=link_in_bio
```
