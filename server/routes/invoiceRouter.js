"use strict";

const express = require('express');

const invoiceController = require('../controllers/invoiceController');

const invoiceRouter = express.Router();

invoiceRouter.post('/createInvoice', invoiceController.createInvoice);

invoiceRouter.post('/readInvoiceByUUID', invoiceController.readInvoiceByUUID);

invoiceRouter.post('/readInvoiceByTableId', invoiceController.readInvoiceByTableId);

invoiceRouter.get('/readAllInvoices', invoiceController.readAllInvoices);

invoiceRouter.get('/readAllPaidInvoices', invoiceController.readAllPaidInvoices);

invoiceRouter.get('/readAllUnpaidInvoices', invoiceController.readAllUnpaidInvoices);

invoiceRouter.put('/updateInvoice', invoiceController.updateInvoice);

invoiceRouter.put('/deleteInvoice', invoiceController.deleteInvoice);

module.exports = invoiceRouter;