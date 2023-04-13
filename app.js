const express = require('express');
const app = express();

//Criando as rotas.
app.get("/", async (req, res) => {
  res.send("Página inicial");
});

//Acessar o progeto.
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http//localhost:8080");
});