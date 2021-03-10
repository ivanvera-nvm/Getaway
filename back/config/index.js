
const S = require('sequelize') 
const db = new S('postgres://postgres@localhost/getaway', {
    logging: false
});

module.exports = db;
