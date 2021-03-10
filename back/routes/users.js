const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users")



/* 


router.put("/:id",PokemonController.update)

router.delete("/:id",PokemonController.deleteOne) */



//RUTA DE PRUEBA
router.get("/", (req, res, next) => {
  res.send("devuelve todos los usuarios").status(200);
});

// ruta para registro
router.post("/register", UserController.createUser)

//ruta para login --> JWT lógica
router.post("/login",  (req, res) => {
const userLogged = req.user
    res.send("estoy en ruta login");
    
  }); 

//ruta para logout
router.post("/logout", (req, res) => {
  res.sendStatus(200);
});

//ruta para editar un usuario
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
});


//ruta para que devuelva el usuario loggeado en el caso que haya
router.get("/:id", ) //JWT

//ruta para promover administradores (admin)
router.get("")

//ruta para eliminar un usuario (admin)
router.delete("/:id", UserController.findById)



module.exports = router;
