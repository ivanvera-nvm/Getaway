const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products");

router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.editProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
