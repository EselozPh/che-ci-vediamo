# Che ci vediamo?

PWA personale per ricordare film e serie TV da vedere. Sottotitolo: **Per non buttare le serate**.

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub (per Pages gratuito deve essere pubblico).
2. Carica **i file** di questa cartella nella radice del repository (non il file zip): `index.html`, `config.js`, `sw.js`, `manifest.webmanifest`, `logo.svg`, le tre icone `icon-*.png` e `.nojekyll`.
3. In **Settings → Pages** scegli *Deploy from a branch*, branch `main`, cartella `/ (root)`.
4. Dopo un minuto l'app è su `https://TUOUTENTE.github.io/NOMEREPO/`.

Per aggiornare l'app basta ricaricare i file modificati nel repository.

## Ricerca in italiano (chiave TMDB)

1. Crea un account gratuito su themoviedb.org.
2. Vai in **Impostazioni → API**, richiedi una chiave per uso personale e copia la **API Key** (v3).
3. Incollala in `config.js` dentro `tmdbKey: ''`.

Con la chiave: locandine, trame, generi e regia in italiano. Senza chiave l'app usa iTunes, Wikipedia, TVmaze e IMDb: funziona, ma con meno precisione e trame spesso in inglese.
Nota: su un repository pubblico la chiave è leggibile da chiunque. È gratuita e si può rigenerare in qualsiasi momento.

## Funzioni

- Ricerca di film e serie TV con locandine, trame e schede. Puoi aggiungere l'anno alla ricerca (es. `Dune 1984`).
- Il pulsante `+` aggiunge subito il titolo alla lista; i doppioni vengono bloccati (stesso titolo e anno).
- Liste separate per Film e Serie TV, filtro, ordinamento, stato "già visto", note personali.
- Backup e import in JSON: l'import aggiunge i titoli nuovi senza cancellare quelli presenti.
- Installabile come app, tema chiaro/scuro automatico.
- I dati restano nel browser del dispositivo: esporta un backup ogni tanto.
