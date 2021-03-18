const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkAdmin = (req, res, next) => {
  const access = req.headers.authorization.split(' ')[1];
  console.log('LLEGANDO AL BACK', access)
  if (access === 'admin') return next()
  res.send({error: 'No sos administrador'})

};



module.exports = checkAdmin;
