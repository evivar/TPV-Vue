"use strict";

const express = require('express');

const lineController = require('../controllers/lineController');

const lineRouter = express.Router();

lineRouter.post('/createLine', lineController.createLine);

lineRouter.post('/readLineByUUID', lineController.readLineByUUID);

lineRouter.post('/readAllInvoiceLines', lineController.readAllInvoiceLines);

lineRouter.get('/readAllLines', lineController.readAllLines);

lineRouter.put('/updateLineQuantity', lineController.updateLineQuantity);

lineRouter.put('/updateLine', lineController.updateLine);

lineRouter.put('/deleteLine', lineController.deleteLine);

module.exports = lineRouter;