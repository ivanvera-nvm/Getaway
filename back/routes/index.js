const express = require ('express')
const router = express.Router()

const productsRouter = require ('./products')
const cartRouter = require('./cart')

router.use('/products', productsRouter)
router.use('/cart',cartRouter)


const usersRouter = require("./users")
router.use("/users", usersRouter)

const adminRouter = require("./admin")
router.use("/admin", adminRouter)

module.exports = router

