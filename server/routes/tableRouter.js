"use strict";

const express = require('express');

const tableController = require('../controllers/tableController');

const tableRouter = express.Router();

tableRouter.post('/createTable', tableController.createTable);

tableRouter.post('/createTableBulk', tableController.createTableBulk);

tableRouter.post('/createTableWithStatus', tableController.createTableWithStatus);

tableRouter.post('/readTableByUUID', tableController.readTableByUUID);

tableRouter.get('/readAllTables', tableController.readAllTables);

tableRouter.get('/readAllFreeTables', tableController.readAllFreeTables);

tableRouter.get('/readAllReservedTables', tableController.readAllReservedTables);

tableRouter.get('/readAllOccupiedTables', tableController.readAllOccupiedTables);

tableRouter.put('/updateTable', tableController.updateTable);

tableRouter.put('/deleteTable', tableController.deleteTable);

module.exports = tableRouter;