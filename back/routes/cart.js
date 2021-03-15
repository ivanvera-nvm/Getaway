const express = require("express");
const router = express.Router();
const CartController = require("../controllers/carro");

//añadir un producto al carrito
router.get("/:id/order", CartController.findUserOrders);

router.post("/addproduct", CartController.addProduct);

router.post("/modifycart", CartController.editProduct);

router.post("/removeproduct", CartController.removeProduct);

router.delete("/deleteorder", CartController.deleteOrder);

module.exports = router;
