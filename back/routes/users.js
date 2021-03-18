const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");


router.post("/register", UserController.createUser);
router.put("/:id", UserController.updateUser)
router.post("/login", UserController.loginUser)
router.post("/logout", UserController.logoutUser);
router.get("/:id"); //JWT




module.exports = router;
