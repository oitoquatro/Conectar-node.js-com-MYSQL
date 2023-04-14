//Criando a conexão com banco de dados
const Sequelize = require('sequelize');
const bancoDados = new Sequelize("junior", "root", "junior", {
  host: 'localhost',
  dialect: 'mysql'
});

//Criando mensagem de erro ou sucesso de conexão
bancoDados.authenticate()
.then(function(){
  console.log("Sucesso de conexão!");
}).catch(function(){
  console.log("Erro de conexão!");
});

// exportando banco de dados

module.exports = bancoDados;
