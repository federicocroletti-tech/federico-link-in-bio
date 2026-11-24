# Statistiche e tracciamento

La pagina invia statistiche anonime a Plausible: nessun cookie, nessun
identificativo persistente, nessun dato del form. Rispetta Do Not Track e Global
Privacy Control. Dell'URL invia solo i parametri `utm_source`, `utm_medium`,
`utm_campaign` e `utm_content`, e del referrer solo il dominio. Il codice è la
sezione `ANALYTICS` di `index.html`.

Gli eventi partono solo quando la pagina è servita dal dominio configurato
(`federicocroletti-tech.github.io`): le anteprime locali non sporcano i dati.

## Attivazione (una volta sola, due minuti)

Il portfolio usa già Plausible, quindi l'account esiste.

1. In Plausible → **Add a website** → dominio `federicocroletti-tech.github.io`.
2. In Site Settings → **Goals** → aggiungi tre *Custom event*:
   `form_submit`, `cta_hero`, `project_click`.
3. Opzionale: in **Custom properties** aggiungi `name`, per sapere quale
   progetto viene aperto.

Finché il sito non è registrato, Plausible scarta gli eventi in silenzio: la
pagina funziona comunque.

Se in futuro userai un dominio personalizzato, aggiorna `ANALYTICS.domain` in
`index.html`, il canonical, i meta `og:` e il JSON-LD, e rigenera i QR (vedi
`tools/render-assets.mjs`).

## Eventi

| Evento | Quando |
|---|---|
| `pageview` | Apertura della pagina (con eventuali UTM) |
| `cta_hero` | Tocco su "Parliamone" |
| `project_click` | Tocco su una scheda progetto (`name`: quale) |
| `form_submit` | Invio del form, cioè apertura di WhatsApp |

`form_submit` non vuol dire che il messaggio sia stato inviato: l'ultimo passo
resta nelle mani del visitatore. Il numero reale di contatti è quello che arriva
su WhatsApp.

## Link con UTM da usare

Un link diverso per ogni punto di ingresso, così nei report si vede cosa
funziona. Base: `https://federicocroletti-tech.github.io/federico-link-in-bio/`

| Dove | Parametri |
|---|---|
| Bio Instagram | `?utm_source=instagram&utm_medium=social&utm_content=link_in_bio` |
| Sticker link nelle storie | `?utm_source=instagram&utm_medium=social&utm_content=story` |
| Scheda Google Business Profile | `?utm_source=google&utm_medium=organic&utm_content=business_profile` |
| Nextdoor / gruppi Facebook | `?utm_source=nextdoor&utm_medium=social` (o `facebook`) |
| Stato WhatsApp | `?utm_source=whatsapp&utm_medium=status` |
| Biglietto da visita (QR) | già incluso: `utm_source=offline&utm_medium=qr&utm_content=biglietto` |
| Volantino (QR) | già incluso: `utm_source=offline&utm_medium=qr&utm_content=volantino` |

## Controllo settimanale (5 minuti)

1. Instagram Insights: visite al profilo, tocchi sul link.
2. Plausible: visitatori per sorgente, `cta_hero`, `form_submit`.
3. WhatsApp: quanti messaggi nuovi arrivati dal form (si riconoscono dalla riga
   "Messaggio inviato dalla tua pagina").
4. Annota i tre numeri e cosa hai pubblicato: dopo quattro settimane si vede
   cosa ha portato contatti.
