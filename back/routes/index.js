const express = require ('express')
const router = express.Router()

const productsRouter = require ('./products')
const cartRouter = require('./cart')

router.use('/products', productsRouter)
router.use('/cart',cartRouter)


module.exports = router

