const express = require("express");
const router = express.Router();
const { OrderController, fn } = require("../controllers/orders");

//trae todas las órdenes de todos los carritos
router.get("/", OrderController.findOrders);

//traer las ordernes por userId y cartId
router.get("/:userId", OrderController.findUserOrders);

router.get("/:userId/product", fn);

//eliminar una orden por su id
router.delete("/", OrderController.deleteCartOrder);

module.exports = router;
