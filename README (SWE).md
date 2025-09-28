# NoteApp - En Fullstack Anteckningsapplikation (MERN)

Välkommen till NoteApp\! Detta är en komplett fullstack-webbapplikation byggd med MERN-stacken (MongoDB, Express.js, React, Node.js). Applikationen låter användare skapa, läsa, uppdatera och radera anteckningar genom ett rent och modernt användargränssnitt. Projektet är utvecklat för att demonstrera en helhetsförståelse för modern webbutveckling, från API-design och databashantering till frontend-utveckling och molndistribution (deployment).

## Live Demo

Du kan prova NoteApp live, hostad på Render.com.

👉 [**Klicka här för att öppna live-demon!**](https://noteapp-m96q.onrender.com/)

⚠️ Observera: Eftersom appen är hostad på Render’s gratisnivå så “sover” servern när den är inaktiv.  
Detta innebär att det kan ta upp till **1–2 minuter** för applikationen att starta första gången du öppnar den. När den väl är igång fungerar den smidigt.

-----

## Teknisk Översikt (Tech Stack)

Projektet är uppdelat i en backend-server och en frontend-klient, byggda med följande teknologier:

### Backend

  * **Node.js**: JavaScript runtime-miljö för att köra server-sida kod.
  * **Express.js**: Minimalistiskt och flexibelt Node.js-ramverk för att bygga API:et och hantera routes.
  * **MongoDB**: NoSQL-databas för att lagra anteckningsdata, hanterad via molntjänsten MongoDB Atlas.
  * **Mongoose**: ODM (Object Data Modeling)-bibliotek för att förenkla interaktionen med MongoDB-databasen.
  * **Upstash & Redis**: Används för att implementera en serverlös rate limiter som skyddar API:et mot överbelastning.
  * **Dotenv**: För att hantera miljövariabler och hålla känslig information (som API-nycklar och databas-URI) säker.

### Frontend

  * **React**: JavaScript-bibliotek för att bygga dynamiska och interaktiva användargränssnitt.
  * **Vite**: Modernt och extremt snabbt byggverktyg för frontend-utveckling.
  * **React Router**: För att hantera klient-sidans routing och navigering mellan olika sidor i applikationen.
  * **Axios**: Promise-baserad HTTP-klient för att smidigt kommunicera med backend-API:et.
  * **Tailwind CSS**: Ett "utility-first" CSS-ramverk för snabb och responsiv design direkt i JSX-koden.
  * **DaisyUI**: Komponentbibliotek för Tailwind CSS som erbjuder färdiga och anpassningsbara UI-komponenter.
  * **Lucid React**: Bibliotek för rena och snygga ikoner.
  * **React Hot Toast**: För att visa användarvänliga notifikationer (toasts).

-----

## Funktioner (Features)

  * **Full CRUD-funktionalitet**: Skapa, läs, uppdatera och radera (Create, Read, Update, Delete) anteckningar.
  * **Responsiv Design**: Användargränssnittet är byggt med Tailwind CSS och är fullt anpassningsbart för både datorer och mobila enheter.
  * **RESTful API**: En väldokumenterad och strukturerad backend-API för att hantera all data.
  * **API-skydd**: Implementerad rate limiting på server-sidan för att förhindra missbruk och överbelastning.
  * **Organiserad Kodstruktur**: Projektet är uppdelat i logiska moduler för både backend (`routes`, `controllers`, `models`) och frontend (`pages`, `components`), vilket följer bästa praxis för underhållbarhet.

-----

## Kom igång lokalt (Getting Started)

Följ dessa steg för att klona och köra projektet på din lokala maskin.

### Förutsättningar

  * Node.js (LTS-version rekommenderas)
  * NPM (följer med Node.js)
  * Git

### Installationssteg

1.  **Klona repositoriet:**

    ```bash
    git clone https://github.com/SuecoAlto/NoteApp.git
    cd NoteApp
    ```

2.  **Installera beroenden för Backend:**

    ```bash
    cd backend
    npm install
    ```

3.  **Installera beroenden för Frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

4.  **Konfigurera miljövariabler (Backend):**

      * Navigera tillbaka till `backend`-mappen.
      * Skapa en fil med namnet `.env`.
      * Lägg till följande variabler och ersätt värdena med dina egna från MongoDB Atlas och Upstash:
        ```
        MONGO_URI=din_mongodb_atlas_connection_string
        PORT=5001
        UPSTASH_REDIS_REST_URL=din_upstash_redis_url
        UPSTASH_REDIS_REST_TOKEN=din_upstash_redis_token
        ```

5.  **Kör applikationen:**

      * **Starta Backend-servern:** Öppna en terminal i `backend`-mappen och kör:

        ```bash
        npm run dev
        ```

        Servern kommer att starta på `http://localhost:5001`.

      * **Starta Frontend-klienten:** Öppna en *ny* terminal i `frontend`-mappen och kör:

        ```bash
        npm run dev
        ```

        Applikationen kommer att vara tillgänglig på `http://localhost:5173` (eller en annan port som anges i terminalen).

-----

## Projektstruktur

Projektet är uppdelat i två huvuddelar, `backend` och `frontend`, för att tydligt separera ansvarsområden.

```
/
├── backend/
│   ├── src/
│   │   ├── config/       # Databasanslutning
│   │   ├── controllers/  # Logik för API-routes (CRUD)
│   │   ├── middleware/   # Rate limiting
│   │   ├── models/       # Mongoose-scheman för data
│   │   └── routes/       # Definition av API-slutpunkter
│   └── server.js         # Huvudfil för servern
│
└── frontend/
    ├── src/
    │   ├── components/   # Återanvändbara React-komponenter (Navbar, NodeCard)
    │   ├── lib/          # Konfiguration av Axios
    │   └── pages/        # Komponenter för varje sida (HomePage, CreatePage)
    └── App.jsx           # Huvudkomponent med routing
```

-----

## Deployment

Denna applikation är förberedd för enkel deployment till molnplattformar som [Render.com](https://render.com/).

1.  **Anslut GitHub-repo:** Anslut detta repository till en ny "Web Service" på Render.
2.  **Konfigurera byggkommandon:**
      * **Build Command**: `npm run build`
      * **Start Command**: `npm run start`
3.  **Miljövariabler:** Lägg till alla variabler från din `.env`-fil ( `MONGO_URI`, `PORT`, `UPSTASH_...`) i Renders miljöinställningar.
4.  **Deploya\!** Render kommer automatiskt att installera beroenden, bygga frontend och starta backend-servern.

-----

SuecoAlto