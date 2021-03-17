const S = require("sequelize");

// postgres://mgmarian:admin@localhost:5432/getaway
// postgres://postgres@localhost/getaway

const db = new S("postgres://mgmarian:admin@localhost:5432/getaway", {

  logging: false,
});

module.exports = db;
