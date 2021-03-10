const express = require("express")
const router = express.Router()
const UserModel = require("../models/User")

//ruta para ver todos los usuarios (admin)
router.get("/", UserController.allUsers)


module.exports = router