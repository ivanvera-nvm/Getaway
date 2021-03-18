const Product = require("../models/Product");
const Category = require("../models/Category");

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

  findByCategory(req, res, next) {
    const id = req.params.id;
    Category.findOne({
      where: { id },
      include: [{ model: Product }],
    })

      .then((category) => {
        console.log(category)
        res.send(category);
      })
      .catch(next);
  },

  findByCategory(req, res, next) {
    const id = req.params.id;
    Product.findOne({
      where: { id },
      include: [{ model: Category }],
    })

      .then((product) => {
        console.log(product)
        res.send(product);
      })
      .catch(next);
  },

  //  en M:N se puede hacer esto : Category.findAll({include: Product})
  findByAllCategories(req,res, next) {
    Product.findAll({include: Category})
   .then((products) => {
     console.log(products)
     res.send("productos por categoría")
   })
  },

  //NO SE PUEDE ESTO --> no puede apuntar el include a la tabla intermedia
/*   findByAllCategories(req,res, next) {
    Product.findAll({include: Product_Category})
    Category.findAll({include: Product_Category})
  }, */


  /* You can create all relationship in single create call too.

Example:

const amidala = await User.create({
  username: 'p4dm3',
  points: 1000,
  profiles: [{
    name: 'Queen',
    User_Profile: {
      selfGranted: true
    }
  }]
}, {
  include: Profile
});

const result = await User.findOne({
  where: { username: 'p4dm3' },
  include: Profile
});

console.log(result);
Output:

{
  "id": 1,
  "username": "p4dm3",
  "points": 1000,
  "profiles": [
    {
      "id": 1,
      "name": "Queen",
      "User_Profile": {
        "selfGranted": true,
        "userId": 1,
        "profileId": 1
      }
    }
  ]
}
   */

  createProduct(req, res, next) {

    const { name, price, stock, description, image, expiry, quantity, categories } = req.body
 
    Product.create({name, price, stock, description, image, expiry, quantity}).then((product) => {
      product.setCategories(categories)
console.log(Object.keys(product.__proto__))
      res.status(201).send(product)
    })
    
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
