const S = require("sequelize");

// postgres://mgmarian:admin@localhost:5432/getaway
// postgres://postgres@localhost/getaway

const db = new S(" postgres://postgres:22362236@localhost/getaway", {
  logging: false,
});

module.exports = db;
