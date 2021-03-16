const express = require("express");
const router = express.Router();
const OrderController = require("../controllers/orders");

//trae todas las órdenes de todos los carritos
router.get("/", OrderController.findOrders);

//traer las ordernes por userId y cartId
router.get("/:userId", OrderController.findUserOrders);

//eliminar una orden por su id
router.delete("/", OrderController.deleteCartOrder);


module.exports = router;