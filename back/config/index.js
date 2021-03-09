/* const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/getaway", {
  logging: false,
});

module.exports = db; */
const S = require('sequelize') 
const db = new S('postgres://postgres@localhost/getaway', {
    logging: false
});

module.exports = db;
