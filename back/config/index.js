const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/*DB-NAME*", {
  logging: false,
});

module.exports = db;
