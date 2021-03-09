
const { Model, DataType } = require("sequelize")
const db = require("../config/index")
const User = require("./User")
const Cart = require("./Cart")
const Product= require("./Product")
const Review = require("./Review")
const Order = require("./Order")
const Category = require("./Category")



module.exports = { db, User, Cart, Product, Review, Order, Category }
//acá exportar los modelos 
=======
// BASE DE DATOS


