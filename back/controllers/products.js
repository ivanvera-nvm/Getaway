const Product = require("../models/Product");
const Product_Category = require("../models/ProductCategory");
const Review = require("../models/Review");
const { Op } = require("sequelize");

const productController = {
  findAll(req, res, next) {
    // console.log(req.query);
    // if (!Object.keys(req.query).length) {
      Product.findAll({ order: [["id", "ASC"]] })
        .then((products) => {
          return res.status(200).json(products);
        })
        .catch((e) => next(e));
    // }
    // else{
    // const { name } = req.query;

    // Product.findAll({
    //   order: [["id", "ASC"]],
    //   where: { name: { [Op.like]: `%${name}%` } },
    // }
    // )
    //   .then((products) => {
    //     console.log(products);
    //     res.status(200).json(products);
    //   })
    //   .catch((e) => next(e));
  // }
},

  findById(req, res, next) {
    const { id } = req.params;
    Product.findOne({ where: { id } })
      .then((product) => res.status(200).json(product))
      .catch((e) => next(e));
  },

  findByCategory(req, res, next) {
   /*  const id = req.params.id; */
    const arr = req.body.categories
    console.log(arr)
    Product_Category.findAll({
      where: { categoryId: arr },
      include: [{ model: Product }],
    })

      .then((product) => {
  
        res.send(product);
      })
      .catch(next);
  },

  findByKeyword(req, res, next) {
    const queryFilter = req.query.name;
    const splited = queryFilter.split("%").join(' ');
    
      Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${splited}%`,
          },
        },
      })
        .then((productByKeyword) => res.send(productByKeyword))
        .catch(next);
   
  },

  findProductReviews(req, res, next) {
    const productId = req.params.id;
    Review.findAll({
      where: {
        productId,
      },
    })
      .then((productReviewed) => res.send(productReviewed))
      .catch(next);
  },

  addProductReview(req, res, send) {
    // const productId = req.params.id;
    const { userId, content, rating, productId } = req.body;
    Review.create({ userId, content, rating, productId })
      .then((review) => res.status(200).send(review))

      .catch((err) => console.log(err));
  },

  getProductRating(req, res, next) {
    const productId = req.params.id;
 

    Review.sum("rating", { where: { productId } }).then((result) => {
      Review.findAndCountAll({ where: { productId } }).then((count) => {
    
        let average = result / count.count;
        console.log(average);
        res.status(200).json({ avg: average });
      });
    });
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
   
    Product.create({
      name,
      price,
      stock,
      description,
      image,
      expiry,
      quantity,
    }).then((product) => {
      product.setCategories(categories);
     
      res.status(201).send(product);
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
