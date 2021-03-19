const express = require("express");
const router = express.Router();
const ProductController = require("../controllers/products");

router.get("/", ProductController.findAll);
router.get("/:id", ProductController.findById);
router.post("/", ProductController.createProduct);
router.put("/:id", ProductController.editProduct);
router.delete("/:id", ProductController.deleteProduct);
router.post("/category/search", ProductController.findByCategory);
router.get("/filter/search", ProductController.findByKeyword);
router.get("/:id/review", ProductController.findProductReviews)
router.post("/review", ProductController.addProductReview)
router.get("/:id/average", ProductController.getProductRating)

module.exports = router;
