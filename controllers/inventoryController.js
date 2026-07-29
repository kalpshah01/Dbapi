const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Inventory = require('../models/inventory');

const viewAllInventory = async (req, res) => {
    try {
        const data = await Inventory.find();
        return sendSuccess(res, 'Inventory list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewInventoryById = async (req, res) => {
    try {
        const data = await Inventory.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Inventory not found', 404);
        }
        return sendSuccess(res, 'Inventory fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createInventory = async (req, res) => {
    try {
        const data = await Inventory.create(req.body);
        return sendCreated(res, 'Inventory created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateInventory = async (req, res) => {
    try {
        const data = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Inventory not found', 404);
        }
        return sendSuccess(res, 'Inventory updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeInventory = async (req, res) => {
    try {
        const data = await Inventory.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Inventory not found', 404);
        }
        return sendSuccess(res, 'Inventory deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllInventory,
    viewInventoryById,
    createInventory,
    updateInventory,
    removeInventory
};
