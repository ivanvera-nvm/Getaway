const Product = require("../models/Product");

const productController = {
  findAll(req, res, next) {
    Product.findAll({order: [["id", "ASC"]]})
      .then((products) => res.status(200).json(products))
      .catch((e) => next(e));
  },

  findById(req, res, next) {
    const { id } = req.params;
    Product.findOne({ where: { id } })
      .then((product) => res.status(200).json(product))
      .catch((e) => next(e));
  },

  createProduct(req, res, next) {
    const { body } = req;
    Product.create(body).then((product) => res.status(201).send(product));
  },

  editProduct(req, res, next) {
    const { id } = req.params;
    Product.findOne({ where: { id } }).then((product) => {
      product.update(req.body, { returning: true })
        .then((product) => res.status(201).send(product[0]));
    });
  },

  deleteProduct(req, res, next) {
    const id = req.params.id;
    Product.destroy({ where: { id } }).then(() =>
      res.status(200).send("Producto eliminado")
    );
  },
};

module.exports = productController;
