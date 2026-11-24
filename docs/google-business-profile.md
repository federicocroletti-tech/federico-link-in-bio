# Google Business Profile e visibilità locale

Chi cerca "assistenza informatica Milano" o "realizzazione sito web Milano" lo fa
su Google, non su Instagram. Una scheda Google gratuita ti fa comparire nelle
ricerche locali e su Maps, e le recensioni contano molto. È l'azione con il
miglior rapporto sforzo/risultato per un'attività di servizi a Milano.

La scheda esiste già: "Federico Croletti - Consulente Informatico", verificata,
5,0 con 28 recensioni, gestita dall'account `federico.croletti@gmail.com`
(rilevato il 24 novembre 2026). Quindi non va creata: vanno sistemati i campi.

## Stato e interventi

| Campo | Stato | Azione |
|---|---|---|
| Profili social | Solo LinkedIn | Instagram aggiunto il 24/11, in revisione Google |
| Categorie | 10, tre fuori tema | Tolte "Club di informatica", "Società di networking aziendale", "Istituto di formazione per l'utilizzo di software"; aggiunta "Web designer" (in revisione) |
| Servizi | Solo "Consulenza informatica" sotto ogni categoria | Da fare dopo l'approvazione delle categorie, con l'elenco nella sezione 2 |
| Orari | 9:00-17:00 tutti i giorni, domenica compresa | Da fare: indicare gli orari in cui rispondi davvero |
| Nome | Contiene "- Consulente Informatico" | Da valutare: le norme di Google sconsigliano descrizioni nel nome |
| Recensioni | Una "non pubblicata" a nome del gestore | Da fare: eliminarla, perché scritta sul proprio profilo |
| Sito web | Portfolio senza UTM | Da fare: sostituire con il link con `utm_source=google` (sezione 2) |

## 1. Se dovessi ricrearla

1. Vai su <https://www.google.com/business/> e accedi con l'account che vuoi
   legare all'attività (meglio uno personale/professionale, non quello aziendale
   del lavoro).
2. **Nome attività**: `Federico Croletti`. Non aggiungere parole chiave al nome
   ("Federico Croletti Siti Web Milano"): le linee guida di Google lo vietano e
   può far sospendere la scheda.
3. **Categoria principale**: la più vicina tra "Servizio di assistenza
   informatica" e "Web designer". **Secondarie**: le altre due o tre pertinenti
   (ad esempio sviluppo software, consulenza informatica). I nomi esatti
   cambiano: scegli dall'elenco proposto.
4. **Tipo di attività**: senza negozio aperto al pubblico scegli "attività che
   si sposta presso i clienti / offre servizi a domicilio" e **nascondi
   l'indirizzo**. Indica Milano e i comuni che copri come area di servizio.
5. **Contatti**: telefono/WhatsApp `+39 389 465 8277`, sito (vedi UTM sotto).
6. **Verifica**: Google chiede video, codice telefonico o cartolina. Segui la
   modalità proposta e usa i dati reali.

## 2. Testi pronti

**Descrizione** (massimo 750 caratteri):

> Sono Federico Croletti, sviluppatore frontend a Milano. Realizzo siti vetrina, landing page e piccoli strumenti digitali per professionisti e piccole attività, e offro assistenza informatica per PC e notebook, posta elettronica e PEC, SPID e smartphone. Lavoro a Milano e dintorni, in presenza o da remoto a seconda del problema. Ogni progetto parte dall'ascolto: cosa ti serve, chi vuoi raggiungere e come vuoi essere contattato. Scrivimi su WhatsApp e raccontami la tua idea.

**Servizi** (uno per voce, senza prezzi):

| Servizio | Descrizione breve |
|---|---|
| Sito vetrina | Un sito semplice per presentare la tua attività, i servizi e i contatti |
| Landing page | Una pagina dedicata a un servizio o a un'offerta, con contatto diretto |
| Soluzioni su misura | WordPress, integrazioni di contatto e piccoli strumenti digitali |
| Assistenza PC e notebook | Diagnosi e risoluzione dei problemi di tutti i giorni |
| Email, PEC e SPID | Configurazione e aiuto con posta, PEC, SPID e firma digitale |
| Smartphone e sicurezza di base | Impostazioni, aggiornamenti e buone pratiche di sicurezza |

**Link sito web** (così le visite da Google si distinguono nei report):

```
https://federicocroletti-tech.github.io/federico-link-in-bio/?utm_source=google&utm_medium=organic&utm_content=business_profile
```

**Pulsante prenotazione/messaggi**: collega WhatsApp `https://wa.me/393894658277`.

## 3. Foto e media

- **Logo**: `assets/logo.webp` (convertilo in PNG o JPG se Google non accetta
  WebP).
- **Copertina**: `assets/og.jpg` (1200×630).
- **Foto del profilo/titolare**: `assets/federico.webp`.
- **Lavori**: screenshot reali dei siti realizzati, con il consenso del cliente.

## 4. Primi post della scheda (uno a settimana)

1. "Realizzo siti web e assistenza informatica a Milano" + immagine
   `assets/og.jpg` + pulsante "Contatta".
2. Il sito di Daniel Pantuso (se autorizzato) con link al progetto.
3. "PC lento, email o SPID da sistemare?" con il post assistenza già pronto.

## 5. Recensioni

Le recensioni arrivano da clienti reali: non comprarle, non scambiarle, non
scriverle tu. Dopo che la scheda è attiva, chiedi a Daniel Pantuso con il
messaggio in [`testimonianze.md`](testimonianze.md) e invia il link diretto
alla recensione (dalla scheda: "Ottieni più recensioni"). Rispondi sempre,
anche con un breve grazie.

## 6. Coerenza e SEO locale

- Stessi dati ovunque: nome, telefono, area di servizio e descrizione uguali su
  Google, Instagram, portfolio e pagina link in bio.
- Sul portfolio verifica che la pagina servizi nomini Milano nel titolo e nel
  testo, e che il sito linki la scheda Google.
- La pagina link in bio contiene già i dati strutturati `ProfessionalService`
  con area di servizio Milano.
- Dopo la verifica, controlla ogni due settimane le statistiche della scheda
  (ricerche, chiamate, clic sul sito) e confrontale con Plausible.
