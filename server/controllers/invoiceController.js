"use strict";

const { sequelize, Invoice, Line } = require('../models');
const mapper = require('../utils/mapper').mapInvoiceToDto;

module.exports = {

    createInvoice: async function (req, res) {
        await sequelize.sync();
        const tableId = req.body.tableId;
        try {
            const invoice = await Invoice.create({ tableId });
            return res.status(200).json({ result: mapper(invoice) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readInvoiceByUUID: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const invoice = await Invoice.findOne({
                where: { uuid: uuid },
                include: Line
            });
            return res.status(200).json({ result: mapper(invoice) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readInvoiceByTableId: async function (req, res) {
        await sequelize.sync();
        const tableId = req.body.tableId;
        try {
            const invoice = await Invoice.findOne({
                where: { tableId: tableId },
                include: Line
            });
            return res.status(200).json({ result: mapper(invoice) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllInvoices: async function (req, res) {
        await sequelize.sync();
        try {
            const invoices = await Invoice.findAll({
                wehere: {
                    active: true
                },
                include: Line
            });
            return res.status(200).json({ result: invoices.map((invoice) => mapper(invoice)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllPaidInvoices: async function (req, res) {
        await sequelize.sync();
        try {
            const invoices = await Invoice.findAll({
                where: {
                    active: true,
                    status: 'paid'
                },
                include: Line
            });
            return res.status(200).json({ result: invoices.map((invoice) => mapper(invoice)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllUnpaidInvoices: async function (req, res) {
        await sequelize.sync();
        try {
            const invoices = await Invoice.findAll({
                where: {
                    active: true,
                    status: 'unpaid'
                },
                include: Line
            });
            return res.status(200).json({ result: invoices.map((invoice) => mapper(invoice)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    updateInvoice: async function (req, res) {
        await sequelize.sync();
        const {uuid, table, status} = req.body;
        try {
            await Invoice.update({table, status},{
                where: {uuid}
            });
            return res.status(200).json({ result: 'Invoice updated!' });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    deleteInvoice: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            await Invoice.update({active: false},{
                where: {uuid}
            });
            return res.status(200).json({ result: 'Invoice deleted!' });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    }

}