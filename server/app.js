"use strict";

const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRouter');
const categoryRouter = require('./routes/categoryRouter');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/user', userRouter);

app.use('/category', categoryRouter);

app.use('/product', productRouter);

app.listen({ port: 5000 }, async () => {
    console.log('Server started on http://localhost:5000');
});