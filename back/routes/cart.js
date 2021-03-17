const express = require("express");
const router = express.Router();
const CartController = require("../controllers/carro");

//añadir un nuevo carrito
router.post("/new", CartController.findOrCreateCart)

//añadir un producto al carrito
router.post("/product", CartController.addProduct);

//remueve una unidad de producto
router.delete("/:cartId/:productId", CartController.deleteProduct)

//actualizar la cantidad de producto
router.put("/", CartController.editProduct);

//submitea la compra
router.post("/submit", CartController.submitCart)

module.exports = router;
