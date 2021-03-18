const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const ProductController = require("")
const checkJWT = require("../utils/checkJwt");

router.get("/", checkJWT, UserController.allUsers);
router.get("/:id", checkJWT, UserController.findById)
router.get("/access",checkJWT, UserController.checkAccess)
router.put("/access/:id",checkJWT, UserController.checkAccess);
router.delete("/:id",checkJWT, UserController.deleteUser);
router.get("/products", ProductController.findAll);

module.exports = router;
