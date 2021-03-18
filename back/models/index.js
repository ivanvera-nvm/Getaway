const { Model, DataType } = require("sequelize");
const db = require("../config/index");
const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Review = require("./Review");
const Order = require("./Order");
const Category = require("./Category");
const Payment = require("./Payment");
const Product_Category = require("./ProductCategory");

//RELACIONES
User.hasMany(Cart); //userId en Cart
User.hasMany(Review); //userId en Review

Order.belongsTo(Cart); //cartId
Payment.belongsTo(Cart); //payment hay un cartId
Cart.belongsTo(User);
Cart.hasMany(Order); // cartId en Order

Product.hasMany(Order); // productId en Order




//RELACIONES CATEGORÍAS --> 
Category.belongsToMany(Product, { through: Product_Category });
Product.belongsToMany(Category, { through: Product_Category });
Category.hasMany(Product_Category)
Product_Category.belongsTo(Category)
Product.hasMany(Product_Category)
Product_Category.belongsTo(Product)

//RELACIONES REVIEWS
Product.belongsToMany(Review, { through: "product_reviews" })
Product.hasMany(Review); //productId en Review


module.exports = {
  db,
  User,
  Cart,
  Product,
  Review,
  Order,
  Category,
  Payment,
  Product_Category,
};
