const express = require("express");
const router = express.Router();
const checkJWT = require('../utils/checkJwt')

router.get("/", checkJWT, (req, res, next) => {
  console.log('ENTRANDO A /ME', req.user);
  //console.log('REEEEQ', req.email)
  res.send(req.user);
});

module.exports = router;
