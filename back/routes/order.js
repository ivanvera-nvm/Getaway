const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orders");

router.get("/", orderController.findOrders);



module.exports = router;