const express = require('express')
const router = express.Router()

const {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product')


//getting people
router.get('/', getProduct)
router.post('/', createProduct)
// PUT METHOD
router.put('/:id',updateProduct )
//DELETE METHOD
router.delete('/:id',deleteProduct)

module.exports = router
