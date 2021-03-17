"use strict";

const { sequelize, Category } = require('../models');
const mapper = require('../utils/mapper').mapCategoryToDto;

module.exports = {

    createCategory: async function(req, res){
        await sequelize.sync();
        const {name, image, CategoryId} = req.body;
        try {
            const category = await Category.create({name, image, CategoryId});
            return res.status(200).json({result: mapper(category)})
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readCategoryByUuid: async function(req, res){
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const category = await Category.findOne({
                where: {uuid},
                include: [{model: Category, as: 'ChildrenCategories'}]
            });
            return res.status(200).json({result: mapper(category)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err})
        }
    },

    readAllCategories: async function(req, res){
        await sequelize.sync();
        try {
            const categories = await Category.findAll({
                where:{active: true, CategoryId: null},
                include: [{model: Category, as: 'ChildrenCategories', nested:true}]
            });
            return res.status(200).json({result: categories.map((category) => mapper(category))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readParentCategory: async function(req, res){
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const category = await Category.findOne({
                where: {uuid}
            });
            const parentCategory = await Category.findOne({
                where: {id: category.CategoryId}
            });
            return res.status(200).json({result: mapper(parentCategory)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readChildrenCategories: async function(req, res){
        await sequelize.sync();
        const CategoryId = req.body.CategoryId;
        try {
            const categories = await Category.findAll({
                where: {CategoryId}
            });
            return res.status(200).json({result: categories.map((category) => mapper(category))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    updateCategory: async function(req, res){
        await sequelize.sync();
        const {uuid, name, image} = req.body;
        try {
            await Category.update({name, image},{
                where: {uuid}
            });
            return res.status(200).json({result: 'Category updated!'})
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    deleteCategory: async function(req, res){
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const category = await Category.findOne({
                where: {uuid}
            });
            await Category.update({active: false},{
                where: {uuid}
            });
            await Category.update({CategoryId: category.CategoryId}, {
                where: {CategoryId: category.id}
            });
            return res.status(200).json({result: 'Category deleted!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },
    
}