## test_finale_angular  
test_finale_angular è un'applicazione Angular che utilizza json-server per simulare un backend RESTful. 
L'applicazione consente di visualizzare, aggiungere, modificare ed eliminare post da una lista, con un'interfaccia utente semplice e intuitiva.

Solo gli utenti autenticati possono visualizzare, aggiungere, modificare ed eliminare i post.

## Funzionalità principali
- Visualizzazione di una lista di post
- Aggiunta di nuovi post
- Modifica di post esistenti            
- Eliminazione di post
- Visualizzazione dei propri post in una dashboard personale
- Visualizzazione dei post di  tutti gli utenti in una dashboard pubblica

## Tecnologie utilizzate
- Angular per lo sviluppo del frontend
- RxJS per la gestione della programmazione reattiva e degli stream di dati
- HttpClientModule di Angular per le chiamate REST
- json-server per simulare un backend e gestire i dati tramite file JSON    

## Come avviare l'applicazione
Assicurati di avere Node.js installato.

Clona il repository

```
git clone <repo-url>
```
cd test_finale_angular
Installa le dipendenze

```
npm install
```

Installa json-server

```
npm install -g json-server
```

Avvia il server di sviluppo In una finestra del terminale, esegui:

```
json-server --watch db.json --port 3000
```

In un'altra finestra del terminale, esegui:

```
ng serve
```
Apri l'app nel browser Visita ```http://localhost:4200``` per vedere l'app in azione.