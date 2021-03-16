const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");


router.post("/register", UserController.createUser);
router.put("/:id", UserController.updateUser)
router.post("/login", UserController.loginUser)
router.post("/logout", (req, res) => {
  res.sendStatus(200);
});
router.get("/:id"); //JWT




// router.post("/newcart", UserController.findOrCreateCart)


module.exports = router;
