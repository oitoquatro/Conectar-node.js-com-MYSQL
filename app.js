const express = require('express');
const app = express();
//Importando o arquivo onde esta a tabela dos dados
const User = require('./models/Users');
const Usuario = require('./models/Users');

//permitir que a aplicação receba os dados em forma de json
app.use(express.json());

//Criando as rotas.
//rota get
app.get("/", async (req, res) => {
  res.send("Página inicial - Junior");
});

//rota post utilizando o insomnia
app.post("/cadastrar", async (req, res) => {
  console.log(req.body);

  //para cadastrar no banco de dados
  await Usuario.create(req.body)
  .then(() => {
    return res.json({
      erro: false,
      mensagem: "Usuário cadastrado com sucesso!"
    });
  }).catch(() => {
    return res.status(400).json({
      erro: true,
      mensagem: "Erro: Usuário não cadastrado!"
    })
  });

  //res.send("Página cadastrar");
});


//Acessar o progeto.
app.listen(8080, () => {
  console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});