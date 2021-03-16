const express = require("express");
const router = express.Router();
const CartController = require("../controllers/carro");

//añadir un nuevo carrito
router.post("/new", CartController.findOrCreateCart)

//añadir un producto al carrito
router.post("/product", CartController.addProduct);

//remueve una unidad de producto
// router.delete("/product", CartController.deleteProduct)

//actualizar la cantidad de producto
router.put("/", CartController.editProduct);


module.exports = router;
