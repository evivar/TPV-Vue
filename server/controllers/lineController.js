"use strict";

const {sequelize, Line} = require('../models');
const mapper = require('../utils/mapper').mapLineToDto;

module.exports = {

    createLine: async function(req, res){
        await sequelize.sync();
        const {quantity, product, cost, invoiceId} = req.body;
        try {
            const line = await Line.create({quantity, product, cost, invoiceId});
            return res.status(200).json({result: mapper(line)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readLineByUUID: async function(req, res){
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const line = await Line.findOne({
                where: {uuid}
            });
            return res.status(200).json({result: mapper(line)});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readAllInvoiceLines: async function(req, res){
        await sequelize.sync();
        const invoiceId = req.body.invoiceId;
        try {
            const lines = await Line.findAll({
                where:{
                    invoiceId
                }
            });
            return res.status(200).json({result: lines.map((line) => mapper(line))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    readAllLines: async function(req, res){
        await sequelize.sync();
        try {
            const lines = await Line.findAll({
                where: {
                    active: true
                }
            });
            return res.status(200).json({result: lines.map((line) => mapper(line))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    updateLineQuantity: async function(req, res){
        await sequelize.sync();
        const line = req.body.line;
        try {
            await Line.update({quantity: line.quantity + 1},{
                where: {id: line.id}
            });
            return res.status(200).json({result: 'Line updated!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err})
        }
    },

    updateLine: async function(req, res){
        await sequelize.sync();
        const {uuid, quantity, discount} = req.body;
        try {
            await Line.update({quantity, discount},{
                where: {uuid}
            });
            return res.status(200).json({result: 'Line updated!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    },

    deleteLine: async function(req, res){
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            await Line.update({active: false},{
                where: {uuid}
            });
            return res.status(200).json({result: 'Line deleted!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({error: err});
        }
    }

}