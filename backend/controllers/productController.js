import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req, res) => {
    const Products = await Product.find({ })
    res.send(Products)
})
const getProductById = asyncHandler(async (req, res) => {

    const product = await Product.findById(req.params.id)
    res.send(product)
})
export { getProductById, getProducts }
