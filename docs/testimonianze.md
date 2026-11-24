# Testimonianze e prova sociale

Un cliente soddisfatto che parla di te vale più di qualsiasi presentazione.
L'esempio più concreto che hai in portfolio è Daniel Pantuso, giardiniere a
Milano.

Regole: solo parole sue, solo con il suo permesso, nessun testo scritto da te a
suo nome.

## Messaggio da inviare a Daniel (WhatsApp)

> Ciao Daniel, spero tu stia bene! Mi farebbe molto piacere avere un tuo parere sincero sul sito che abbiamo fatto insieme. Ti andrebbe di scrivermi due o tre righe? Ti lascio tre spunti, rispondi a quello che preferisci:
>
> 1. Prima del sito, come ti presentavi ai clienti?
> 2. Cosa è cambiato adesso?
> 3. Lo consiglieresti a un altro professionista? Perché?
>
> Se mi dai il permesso, vorrei usare la tua risposta con il tuo nome sulla mia pagina e sul profilo Instagram, anche in forma abbreviata se preferisci. Dimmi pure se vuoi cambiare o togliere qualcosa. Grazie mille!

Se la scheda Google è già attiva, aggiungi in un secondo momento, senza insistere:

> Se ti fa piacere, potresti anche lasciare una recensione su Google: ci vuole un minuto e mi aiuta tanto. Ecco il link: …

## Dopo la risposta

1. Chiedi conferma scritta del testo finale e di come vuole comparire (nome
   completo, solo nome, attività).
2. Aggiungi la testimonianza nella pagina, in `index.html`, nella costante
   `TESTIMONIALS` (vedi sotto): la sezione "Cosa dicono di me" compare da sola.
3. Crea un post Instagram con la citazione (template in
   `marketing/instagram/templates`) e usala nella scheda Google.
4. Salva la conferma del permesso (anche lo screenshot della chat).

## Come aggiungerla alla pagina

In `index.html`, cerca `TESTIMONIALS` e inserisci:

```js
var TESTIMONIALS = [
  { text: "Testo esatto approvato dal cliente", author: "Daniel Pantuso", role: "Giardiniere a Milano" }
];
```

Finché l'elenco è vuoto, la sezione resta nascosta. Il testo viene inserito
come testo semplice, non come HTML.

## Altre forme di prova sociale che non richiedono parole altrui

- Un caso di studio breve: problema, cosa hai realizzato, il sito online.
- Screenshot reali dei lavori (con consenso), prima e dopo.
- Il numero di progetti pubblicati in portfolio, solo se verificato.
