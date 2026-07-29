const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Customer = require('../models/customer');

const viewAllCustomer = async (req, res) => {
    try {
        const data = await Customer.find();
        return sendSuccess(res, 'Customer list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewCustomerById = async (req, res) => {
    try {
        const data = await Customer.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Customer not found', 404);
        }
        return sendSuccess(res, 'Customer fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createCustomer = async (req, res) => {
    try {
        const data = await Customer.create(req.body);
        return sendCreated(res, 'Customer created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateCustomer = async (req, res) => {
    try {
        const data = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Customer not found', 404);
        }
        return sendSuccess(res, 'Customer updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeCustomer = async (req, res) => {
    try {
        const data = await Customer.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Customer not found', 404);
        }
        return sendSuccess(res, 'Customer deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllCustomer,
    viewCustomerById,
    createCustomer,
    updateCustomer,
    removeCustomer
};
