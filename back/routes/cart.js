const express = require("express");
const router = express.Router();
const CartController = require("../controllers/carro");

//añadir un producto al carrito
router.post("/addproduct", CartController.addProduct);

router.post("/modifycart", CartController.editProduct);

router.delete("/deleteproduct", CartController.deleteProduct);

router.get("/:id/order", CartController.findUserOrders);

module.exports = router;
