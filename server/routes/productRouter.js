"use strict";

const express = require('express');

const productController = require('../controllers/productController');

const productRouter = express.Router();

productRouter.post('/createProduct', productController.createProduct);

productRouter.post('/readProductById', productController.readProductById);

productRouter.get('/readAllProducts', productController.readAllProducts);

productRouter.post('/readProductsByCategoryId', productController.readProductsByCategoryId);

productRouter.put('/updateProduct', productController.updateProduct);

productRouter.put('/deleteProduct', productController.deleteProduct);

module.exports = productRouter;