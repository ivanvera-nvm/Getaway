<<<<<<< HEAD
//Ruta db conexion de Martin: "postgres://postgres:22362236@localhost/getaway"
const S = require("sequelize");
const db = new S("postgres://postgres@localhost/getaway", {
  logging: false,
=======

const S = require('sequelize') 

// postgres://mgmarian:admin@localhost:5432/getaway
// postgres://postgres@localhost/getaway
const db = new S('postgres://mgmarian:admin@localhost:5432/getaway', {
    logging: false
>>>>>>> 7021ad8031fc6275a028ec0a0e045b5bb76a75f3
});

module.exports = db;
