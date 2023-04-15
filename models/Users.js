// preparando a conexão do Users com db
const Sequelize = require('sequelize');
const db = require('./db');

// Criando uma constante pra exportação
const Usuario = db.define('usuarios', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,    
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,    
    allowNull: false,
  }  
});

//Criando a tabela atravéz do models obs: tabela não existia, então é necessario esse próximo comando.
//Usuario.sync();    aqui comentei o mesmo porque ja criei a tabela acima.

//Verificar se ha alguma diferença na tabela, realiza a alteração
//Usuario.sync({ alter: true });

//Fazendo a exportação
module.exports = Usuario;