const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Store = require('../models/store');

const viewAllStore = async (req, res) => {
    try {
        const data = await Store.find();
        return sendSuccess(res, 'Store list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewStoreById = async (req, res) => {
    try {
        const data = await Store.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Store not found', 404);
        }
        return sendSuccess(res, 'Store fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createStore = async (req, res) => {
    try {
        const data = await Store.create(req.body);
        return sendCreated(res, 'Store created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateStore = async (req, res) => {
    try {
        const data = await Store.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Store not found', 404);
        }
        return sendSuccess(res, 'Store updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeStore = async (req, res) => {
    try {
        const data = await Store.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Store not found', 404);
        }
        return sendSuccess(res, 'Store deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllStore,
    viewStoreById,
    createStore,
    updateStore,
    removeStore
};
