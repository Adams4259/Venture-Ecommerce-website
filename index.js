const express = require('express')
const fs = require('fs');

const {
    getProduct,
    updateProduct,
    postProduct,
    deleteProduct
} = require('./controllers/product')

const app = express()

app.get('/', getProduct)

// POST METHOD
app.post('/api/product', postProduct)

// updating a product
app.put('/api/product/:id', updateProduct)

// Deleting product
app.delete('/api/product/:id', deleteProduct)


app.listen(5000)