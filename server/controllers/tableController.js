"use strict";

const { sequelize, Table } = require('../models');
const { Op } = require("sequelize");
const mapper = require('../utils/mapper').mapTableToDto;

module.exports = {

    createTable: async function (req, res) {
        await sequelize.sync();
        const name = req.body.name;
        try {
            const table = await Table.create({ name });
            return res.status(200).json({ result: mapper(table) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    createTableBulk: async function (req, res) {
        await sequelize.sync();
        try {
            const tableRecords = [];
            for(var i = 26; i <= 50; i++){
                tableRecords.push({name: 'Table ' + i})
            }
            const tables = await Table.bulkCreate(tableRecords);
            return res.status(200).json({ result: tables.map((table) => mapper(table)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    createTableWithStatus: async function (req, res) {
        await sequelize.sync();
        const name = req.body.name;
        const status = req.body.status;
        try {
            const table = await Table.create({ name, status });
            return res.status(200).json({ result: mapper(table) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readTableByUUID: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const table = await Table.findOne({
                where: { uuid }
            });
            return res.status(200).json({ result: mapper(table) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllTables: async function (req, res) {
        await sequelize.sync();
        try {
            const tables = await Table.findAll({
                where: { active: true }
            });
            return res.status(200).json({ result: tables.map((table) => mapper(table)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllFreeTables: async function (req, res) {
        await sequelize.sync();
        try {
            const tables = await Table.findAll({
                where: {
                    active: true,
                    status: 'free'
                }
            });
            return res.status(200).json({ result: tables.map((table) => mapper(table)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllReservedTables: async function (req, res) {
        await sequelize.sync();
        try {
            const tables = await Table.findAll({
                where: {
                    active: true,
                    status: 'reserved'
                }
            });
            return res.status(200).json({ result: tables.map((table) => mapper(table)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllOccupiedTables: async function (req, res) {
        await sequelize.sync();
        try {
            const tables = await Table.findAll({
                where: {
                    active: true,
                    status: 'occupied'
                }
            });
            return res.status(200).json({ result: tables.map((table) => mapper(table)) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    updateTable: async function (req, res) {
        await sequelize.sync();
        const { uuid, name, status } = req.body;
        try {
            await Table.update({ name, status }, {
                where: { uuid }
            });
            return res.status(200).json({ result: 'Table updated!' });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    deleteTable: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            await Table.update({ active: false }, {
                where: { uuid }
            });
            return res.status(200).json({ result: 'Table deleted!' });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    }

}