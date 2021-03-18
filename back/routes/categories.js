const express = require('express')
const router = express.Router()
const CategoryController = require("../controllers/category")

//ruta para traer categoría por id
router.get("/:id", CategoryController.oneCategory)

//ruta para traer todas las categorias
router.get("/", CategoryController.allCategories)

//--------------> FUNCIONES DE ADMIN
//ruta para crear categorías
router.post("/", CategoryController.createCategory)

//ruta para editar categorías
router.put("/:id", CategoryController.editCategory)

//ruta para eliminar categorías
router.delete("/:id", CategoryController.removeCategory)


module.exports = router