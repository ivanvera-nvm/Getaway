const { Model, DataType } = require("sequelize");
const db = require("../config/index");
const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Review = require("./Review");
const Order = require("./Order");
const Category = require("./Category");

//RELACIONES
User.hasMany(Cart); //userId en Cart
User.hasMany(Review); //userId en Review

Order.belongsTo(Cart); //cartId

Cart.belongsTo(User);
Cart.hasMany(Order); // cartId en Order

Product.hasMany(Order); // productId en Order
Product.hasMany(Review); //productId en Review

Product.belongsToMany(Review, { through: "product_reviews" });

Category.belongsToMany(Product, { through: "product_categories" });
//producto tiene orderId y orderItemId --> queremos que en orderItemId este el productId

module.exports = { db, User, Cart, Product, Review, Order, Category };
