const { Model, DataType } = require("sequelize");
const db = require("../config/index");
const User = require("./User");
const Cart = require("./Cart");
const Product = require("./Product");
const Review = require("./Review");
const Order = require("./Order");
const Category = require("./Category");
const Payment = require("./Payment")
const ProductCategories = require("./ProductCategories")

//RELACIONES
User.hasMany(Cart); //userId en Cart
User.hasMany(Review); //userId en Review

Order.belongsTo(Cart); //cartId
Payment.belongsTo(Cart) //payment hay un cartId
Cart.belongsTo(User);
Cart.hasMany(Order); // cartId en Order


Product.hasMany(Order); // productId en Order
Product.hasMany(Review); //productId en Review

Product.belongsToMany(Review, { through: "product_reviews" });

Category.belongsToMany(Product, { through: ProductCategories, foreignKey: "product_id" });
Product.belongsToMany(Category, {through: ProductCategories, foreignKey: "category_id"})

module.exports = { db, User, Cart, Product, Review, Order, Category, Payment, ProductCategories };
