const { httpError } = require("../helpers/handleError");
const userModel = require("../models/users");

const getItems = async (req, res) => {
    try {
        const response = await userModel.find({})

        res.send({ users: response });
    } catch (error) {
        httpError(res, error);
    }
};

const getItem = (req, res) => {
    
};

const createItem = async (req, res) => {
    try {
        const { name, age } = req.body;
        const response = await userModel.create({ name, age });

        res.send({ data: response });
    } catch (error) {
        httpError(res, error);
    }
};

const updateItem = (req, res) => {};

const deleteItem = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
