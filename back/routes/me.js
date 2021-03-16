const express = require("express");
const router = express.Router();
const checkJWT = require('../utils/checkJwt')

router.get("/", checkJWT, (req, res, next) => {
  const token =  req.headers.authorization.split(' ')[1] // Token
  const user = req.user // Objeto user
  res.json({token, user});
});

module.exports = router;
