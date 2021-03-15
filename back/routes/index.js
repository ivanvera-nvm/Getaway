const express = require("express");
const router = express.Router();

const productsRouter = require("./products");
const usersRouter = require("./users");
const adminRouter = require("./admin");
const meRouter = require("./me");

router.use("/me", meRouter);
router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/admin", adminRouter);

const cartRouter = require("./cart");
router.use("/cart", cartRouter);

const orderRouter = require("./order");
router.use("/order", orderRouter);

module.exports = router;
