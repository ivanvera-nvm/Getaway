
const { Model, DataType } = require("sequelize")
const db = require("../config/index")
const User = require("./User")
const Cart = require("./Cart")
const Product= require("./Product")
const Review = require("./Review")
const Order = require("./Order")
const Category = require("./Category")
const OrderItem = require("./OrderItem")


//RELACIONES
User.hasOne(Cart) //userId en Cart
User.hasMany(Review) //userId en Review
User.hasMany(Order) //userId en Order

Order.belongsTo(User) //userId en Cart
Order.hasMany(OrderItem) //orderId
Order.belongsTo(Cart) //cartId


Cart.hasOne(Order)

Product.hasMany(OrderItem)
Product.hasMany(Review) //productId en Review
Product.belongsToMany(Review, {through: "product_reviews"})

Category.belongsToMany(Product, {through: "product_categories"})




//producto tiene orderId y orderItemId --> queremos que en orderItemId este el productId

module.exports = { db, User, Cart, Product, Review, Order, Category }


