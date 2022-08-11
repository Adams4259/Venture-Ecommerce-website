const express = require('express')

const app = express()

const getProduct = (req, res) => {
    res.status(200).json()
}

const createProduct  = (req, res) => {
    const {product} = req.body
    if (!product) {
        return res.status(400).json({ success: false, msg: 'please provide product'})
    }
    res.status(201).send({ success: true, product: product})
}

const postProduct =  (req, res) =>{
    const {product} = req.body

    if(!product) {
        return res.status(200).json({ success: true, msg: 'products displayed'})
    }
    res.status(201).send({ success: true, product: product})
}

const updateProduct = (req, res) => {
    const {id} = req.params
    const {product} = req.body

    const item = product.find((product) => product.id === Number(id));
    if (!item) {
        return res.status(400).json({ success: false, msg: `no product with id ${id}`})    
    }

    const newProduct = product.map((product) => {
        if (item.id === Number(id)) {
            item.product
        }
        return item
    })
    res.status(200).json({ success: true, list: newProduct })
}

const deleteProduct =  (req, res) => {
    // find product
    const product = product.find((product) => product.id === Number(req.params.id));
    if (!product) {
        return res.status(400).json({ success: false, msg: `no person with id ${id}`})
    }

    const newProduct = product.filter((product) => product.id !== Number(req.params.id))
    return res.status(200).json({ success: true, list:[...newProduct]})
}

module.exports = {
    getProduct,
    updateProduct,
    postProduct,
    deleteProduct
}