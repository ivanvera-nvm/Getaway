//Ruta db conexion de Martin: "postgres://postgres:22362236@localhost/getaway"
const S = require("sequelize");
const db = new S("postgres://postgres@localhost/getaway", {
  logging: false,
});

module.exports = db;
