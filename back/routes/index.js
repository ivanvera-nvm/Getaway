const express = require ('express')
const router = express.Router()

const productsRouter = require ('./products')
const usersRouter = require("./users")
const adminRouter = require("./admin")

router.use('/products', productsRouter)
router.use("/users", usersRouter)
router.use("/admin", adminRouter)

module.exports = router
