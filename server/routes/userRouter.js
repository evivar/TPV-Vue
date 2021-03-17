"use strict";

const express = require('express');

const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/createUser', userController.createUser);

userRouter.post('/readUserByUUID', userController.readUserByUUID);

userRouter.get('/readAllUsers', userController.readAllUsers);

userRouter.put('/updateUser', userController.updateUser);

userRouter.put('/deleteUser', userController.deleteUser);

module.exports = userRouter;