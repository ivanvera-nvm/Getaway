const express = require("express");
const router = express.Router();

const { addCartItem,deleteCartItem } = require("../controller/Cart");
// GET ROUTES
router.get("/", (req, res) => {
  //Traigo todos los items del carro
});

// POST ROUTES

router.post("/", addCartItem);

// PUT ROUTES
router.put("/:productId", (req, res) => {
  //Modifico la cantidad del mismo producto
});

// DELETE ROUTES

router.delete("/:id",deleteCartItem);

module.exports = router;


/* Lo que puede pasar en el Carrito

1.

*/