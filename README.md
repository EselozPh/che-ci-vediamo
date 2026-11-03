# Che ci vediamo?

PWA statica personale per ricordare film e serie TV da vedere. Sottotitolo: **Per non buttare le serate**.

## Uso locale

Apri `index.html` in Chrome per l'uso base. Per avere il service worker e l'installazione PWA, servi la cartella con un server statico, ad esempio:

```bash
python3 -m http.server 8080
```

Poi apri `http://localhost:8080`.

## Cloudflare Pages

Crea un nuovo progetto Pages e carica questa cartella come sito statico. Non serve build command e la directory di output è la root del progetto. In alternativa collega il repository e imposta:

- Build command: vuoto
- Build output directory: `.`

L'app non usa backend né chiavi API. La ricerca usa iTunes Search API per i film e TVmaze per le serie (quindi copre anche titoli internazionali come The Wire). I dati della lista restano nel `localStorage` del browser. Usa **Esporta backup** per trasferirli o conservarli.

## Funzioni

- Ricerca automatica di film e serie TV con locandine e schede.
- Liste separate per Film e Serie TV.
- Il pulsante `+` aggiunge subito il film o la serie alla lista. Le informazioni aggiuntive, come stagione, piattaforma o note personali, si possono inserire e modificare in seguito dalla scheda del titolo.
- Filtri, ordinamento, stato “già visto”, dettaglio scheda, backup/import JSON.
- PWA installabile e cache offline dell'interfaccia.
