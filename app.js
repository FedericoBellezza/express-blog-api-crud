require("dotenv").config();
const express = require("express");
const app = express();
const noRouter = require("./middlewares/noRouter.js");
const errorHandler = require("./middlewares/errorHandler.js");

// - ENV
const port = process.env.HOST_PORT;
const domain = process.env.HOST_DOMAIN;

app.use(express.json());
app.use(express.static("public"));

// - Importo le rotte di "posts"
const postsRouter = require("./routers/postsRouter");
app.use("/posts", postsRouter);

app.use(noRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening AT ${domain}${port}`);
});
