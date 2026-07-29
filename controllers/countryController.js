const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Country = require('../models/country');

const viewAllCountry = async (req, res) => {
    try {
        const data = await Country.find();
        return sendSuccess(res, 'Country list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewCountryById = async (req, res) => {
    try {
        const data = await Country.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Country not found', 404);
        }
        return sendSuccess(res, 'Country fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createCountry = async (req, res) => {
    try {
        const data = await Country.create(req.body);
        return sendCreated(res, 'Country created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateCountry = async (req, res) => {
    try {
        const data = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Country not found', 404);
        }
        return sendSuccess(res, 'Country updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeCountry = async (req, res) => {
    try {
        const data = await Country.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Country not found', 404);
        }
        return sendSuccess(res, 'Country deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllCountry,
    viewCountryById,
    createCountry,
    updateCountry,
    removeCountry
};
