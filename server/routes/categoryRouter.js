"use strict";

const express = require('express');

const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/createCategory', categoryController.createCategory);

categoryRouter.post('/readCategoryByUuid', categoryController.readCategoryByUuid);

categoryRouter.get('/readAllCategories', categoryController.readAllCategories);

categoryRouter.post('/readParentCategory', categoryController.readParentCategory);

categoryRouter.post('/readChildrenCategories', categoryController.readChildrenCategories);

categoryRouter.put('/updateCategory', categoryController.updateCategory);

categoryRouter.put('/deleteCategory', categoryController.deleteCategory);

module.exports = categoryRouter;