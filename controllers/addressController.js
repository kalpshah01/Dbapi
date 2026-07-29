const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Address = require('../models/address');

const viewAllAddress = async (req, res) => {
    try {
        const data = await Address.find();
        return sendSuccess(res, 'Address list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewAddressById = async (req, res) => {
    try {
        const data = await Address.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Address not found', 404);
        }
        return sendSuccess(res, 'Address fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createAddress = async (req, res) => {
    try {
        const data = await Address.create(req.body);
        return sendCreated(res, 'Address created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateAddress = async (req, res) => {
    try {
        const data = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Address not found', 404);
        }
        return sendSuccess(res, 'Address updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeAddress = async (req, res) => {
    try {
        const data = await Address.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Address not found', 404);
        }
        return sendSuccess(res, 'Address deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllAddress,
    viewAddressById,
    createAddress,
    updateAddress,
    removeAddress
};
