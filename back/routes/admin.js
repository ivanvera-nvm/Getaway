const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users");
const ProductController = require("../controllers/products")
const checkJWT = require("../utils/checkJwt");
const checkAdmin = require("../utils/checkAdmin")

router.use("/", checkAdmin)
router.get("/users", checkAdmin, UserController.allUsers);
router.get("/:id", UserController.findById)
router.get("/access", UserController.checkAccess)
router.put("/access/:id", UserController.checkAccess);
router.delete("/:id", UserController.deleteUser);
router.get("/products", ProductController.findAll);

module.exports = router;
