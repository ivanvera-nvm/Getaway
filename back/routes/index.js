const express = require ('express')
const router = express.Router()

const productsRouter = require ('./products')

router.use('/products', productsRouter)

const usersRouter = require("./users")
router.use("/users", usersRouter)

const adminRouter = require("./admin")
router.use("/admin", adminRouter)

const cartRouter = require("./cart")
router.use("/cart",cartRouter)

module.exports = router
