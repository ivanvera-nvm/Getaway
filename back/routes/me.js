const express = require("express");
const router = express.Router();
const checkJWT = require('../utils/checkJwt')

router.get("/", checkJWT, (req, res, next) => {
  console.log('ENTRANDO A /ME', req.user);
  //console.log('REEEEQ', req.email)
  const token =  req.headers.authorization.split(' ')[1]
  const user = req.user
  console.log('TOKEN', token)
  res.json({token, user});
});

module.exports = router;
