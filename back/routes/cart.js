const express = require("express");
const router = express.Router();
const CartController = require("../controllers/carro");


//Buscar info del carrito
router.get('/:userId', CartController.findUserCart)

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

//actualiza estado del stock
router.put("/stock", CartController.updateStock)

//actualiza estado del carrito
router.put("/status", CartController.updateCartStatus)

//ruta a checkout
/* router.get("/checkout", CartController.checkout)
 */
module.exports = router;
