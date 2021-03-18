const S = require("sequelize");
const env = require('node-env-file')
const path = require('path')

// env(path.join((__dirname, './.env')))

// postgres://mgmarian:admin@localhost:5432/getaway
// postgres://postgres@localhost/getaway

const db = new S(process.env.HOST || 'postgres://postgres@localhost/getaway' , {
  logging: false,
});

module.exports = db;
