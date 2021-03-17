const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const checkJWT = require("../utils/checkJwt");

router.get("/", checkJWT, UserController.allUsers);

router.get("/:id", UserController.findById);

router.put("/access/:id", UserController.checkAccess);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
