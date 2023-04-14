const express = require('express');
const app = express();

//Criando a conexão com db.js
const db = require('./models/db');

//Criando as rotas.
//rota get
app.get("/", async (req, res) => {
  res.send("Página inicial - Junior");
});

//rota post utilizando o insomnia
app.post("/cadastrar", async (req, res) => {
  res.send("Página cadastrar");
});


//Acessar o progeto.
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});