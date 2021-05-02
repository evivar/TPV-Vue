"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');
const tableRouter = require('./routes/tableRouter');
const invoiceRouter = require('./routes/invoiceRouter');
const lineRouter = require('./routes/lineRouter');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use('/user', userRouter);

app.use('/category', categoryRouter);

app.use('/product', productRouter);

app.use('/table', tableRouter);

app.use('/invoice', invoiceRouter);

app.use('/line', lineRouter);

app.listen({ port: 5000 }, async () => {
    console.log('Server started on http://localhost:5000');
});