const S = require("sequelize");


// env(path.join((__dirname, './.env')))

// postgres://mgmarian:admin@localhost:5432/getaway
// postgres://postgres@localhost/getaway

const db = new S("postgres://postgres@localhost/getaway", {
  logging: false,
});

module.exports = db;
