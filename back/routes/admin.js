const express = require("express")
const router = express.Router()
const UserController = require("../controllers/users")

//ruta para ver todos los usuarios (admin)
router.get("/", UserController.allUsers)

//ruta para ver un usuario por su id
router.get("/:id", UserController.findById)

//ruta para promover administradores (admin)
/* Como usuario quiero poder editar otros usuarios para promoverlos a usuario administrador o borrarlos

como user:admin busca a otros usuarios y si son access user, puede editarlos (update) para que sean admin o borrarlos

 */

router.get("/access", UserController.checkAccess)


router.delete("/:id", UserController.deleteUser);


module.exports = router