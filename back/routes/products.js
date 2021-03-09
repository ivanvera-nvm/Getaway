const express = require ('express')
const router = express.Router()


router.get('/', (req, res, next) => {
    res.status(200).send('Devuelvo todos los productos')
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.send(`Devuelvo el producto ${id}`)
})

router.post('/', (req, res, next) => {
    res.status(201).send('creando')
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id
})

router.delete('/:id', (req, res, next) => {
    const id = req.params.id
})

module.exports = router