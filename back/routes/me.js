const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("ME: USUARIO", req.user);
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
