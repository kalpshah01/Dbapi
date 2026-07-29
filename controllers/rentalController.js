const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Rental = require('../models/rental');

const viewAllRental = async (req, res) => {
    try {
        const data = await Rental.find();
        return sendSuccess(res, 'Rental list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewRentalById = async (req, res) => {
    try {
        const data = await Rental.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Rental not found', 404);
        }
        return sendSuccess(res, 'Rental fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createRental = async (req, res) => {
    try {
        const data = await Rental.create(req.body);
        return sendCreated(res, 'Rental created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateRental = async (req, res) => {
    try {
        const data = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Rental not found', 404);
        }
        return sendSuccess(res, 'Rental updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeRental = async (req, res) => {
    try {
        const data = await Rental.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Rental not found', 404);
        }
        return sendSuccess(res, 'Rental deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllRental,
    viewRentalById,
    createRental,
    updateRental,
    removeRental
};
