"use strict";

const { sequelize, Product } = require('../models');
const mapper = require('../utils/mapper').mapProductToDto

module.exports = {

    createProduct: async function (req, res) { 
        await sequelize.sync();
        const {name, price, categoryId} = req.body;
        try {
            const product = await Product.create({name, price, categoryId});
            return res.status(200).json({result: mapper(product)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readProductById: async function (req, res) {
        await sequelize.sync();
        const id = req.body.id;
        try {
            const product = await Product.findOne({
                where: {id}
            });
            return res.status(200).json({result: mapper(product)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
     },

    readAllProducts: async function (req, res) {
        await sequelize.sync();
        try {
            const products = await Product.findAll({
                where: {active: true}
            });
            return res.status(200).json({result: products.map((product) => mapper(product))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
     },

    readProductsByCategoryId: async function (req, res) { 
        await sequelize.sync();
        const categoryId = req.body.categoryId;
        try {
            const products = await Product.findAll({
                where: {categoryId}
            });
            return res.status(200).json({result: products.map((product) => mapper(product))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    updateProduct: async function (req, res) {
        await sequelize.sync();
        const {uuid, name, image, price} = req.body;
        try {
            await Product.update({name, image, price},{
                where: {uuid}
            });
            return res.status(200).json({result: 'Product updated!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
     },

    deleteProduct: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            await Product.update({active: false}, {
                where: {uuid}
            });
            return res.status(200).json({result: 'Product deleted!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
     }

};