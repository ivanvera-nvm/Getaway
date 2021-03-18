const Product = require("../models/Product");
const Product_Category = require("../models/ProductCategory");
const { Op } = require("sequelize");

const productController = {
  findAll(req, res, next) {
    Product.findAll({ order: [["id", "ASC"]] })
      .then((products) => res.status(200).json(products))
      .catch((e) => next(e));
  },

  findById(req, res, next) {
    const { id } = req.params;
    Product.findOne({ where: { id } })
      .then((product) => res.status(200).json(product))
      .catch((e) => next(e));
  },

  findByCategory(req, res, next) {
    const id = req.params.id;
    Product_Category.findAll({
      where: { categoryId: id },
      include: [{ model: Product }],
    })

      .then((product) => {
        console.log(product);
        res.send(product);
      })
      .catch(next);
  },

  findByKeyword(req, res, next) {
    const queryFilter = req.query.name;
    Product.findAll({
      where: {
        [Op.like]: `%${queryFilter}%`
      },
    })
    .then((productByKeyword) => res.send(productByKeyword))
    .catch(next)
  },

  createProduct(req, res, next) {
    const {
      name,
      price,
      stock,
      description,
      image,
      expiry,
      quantity,
      categories,
    } = req.body;
    console.log(categories);
    Product.create({
      name,
      price,
      stock,
      description,
      image,
      expiry,
      quantity,
    }).then((product) => {
      product.setCategories(categories).then((products) => {
        res.send(products);
      });
    });
  },

  editProduct(req, res, next) {
    const { id } = req.params;
    Product.findOne({ where: { id } }).then((product) => {
      product
        .update(req.body, { returning: true })
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
