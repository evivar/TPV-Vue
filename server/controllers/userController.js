"use strict";

const { sequelize, User } = require('../models');
const mapper = require('../utils/mapper').mapUserToDto;

module.exports = {

    createUser: async function (req, res) {
        await sequelize.sync();
        const { username, password, role } = req.body;
        try {
            const user = await User.create({ username, password, role });
            return res.status(200).json({ result: mapper(user) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readUserByUUID: async function (req, res) {
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            const user = await User.findOne({
                where: {uuid}
            });
            return res.status(200).json({ result: mapper(user) });
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    },

    readAllUsers: async function (req, res) {
        await sequelize.sync();
        try {
            const users = await User.findAll();
            return res.status(200).json({result: users.map(user => mapper(user))});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
     },

    updateUser: async function (req, res) {
        await sequelize.sync();
        const { uuid, username, password, role } = req.body;
        try {
            await User.update({ username, password, role },{
                where: {uuid}
            });
            return res.status(200).json({result: 'User updated!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
     },

    deleteUser: async function (req, res) { 
        await sequelize.sync();
        const uuid = req.body.uuid;
        try {
            await User.update({active: false}, {
                where: {uuid}
            });
            return res.status(200).json({result: 'User deleted!'});
        } catch (err) {
            console.log('err :>> ', err);
            return res.status(500).json({ error: err });
        }
    }

}