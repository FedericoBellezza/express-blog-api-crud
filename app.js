// - Milestone 4
// Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.
// - Bonus
// Quelli del giorno prima, se non già fatti
// Aggiungere un controllo dell'errore nelle rotte che utilizzano un parametro obbligatorio :id quando la risorsa corrispondente non viene trovata, rispondere con uno stato 404 e un messaggio d’errore, sempre in formato JSON.
// Aggiungere un controllo dell'errore per i parametri in ingresso nel body nelle rotte store e update , rispondere con uno stato 400 e un messaggio d’errore, sempre in formato JSON.
// Buon Lavoro e buon divertimento (modificato)

require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.HOST_PORT;
const domain = process.env.HOST_DOMAIN;

app.use(express.json());

app.use(express.static("public"));

// - Importo le rotte di "posts"
const postsRouter = require("./routers/postsRouter");
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening AT ${domain}${port}`);
});
