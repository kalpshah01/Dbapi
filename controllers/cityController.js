const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const City = require('../models/city');

const viewAllCity = async (req, res) => {
    try {
        const data = await City.find();
        return sendSuccess(res, 'City list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewCityById = async (req, res) => {
    try {
        const data = await City.findById(req.params.id);
        if (!data) {
            return sendError(res, 'City not found', 404);
        }
        return sendSuccess(res, 'City fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createCity = async (req, res) => {
    try {
        const data = await City.create(req.body);
        return sendCreated(res, 'City created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateCity = async (req, res) => {
    try {
        const data = await City.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'City not found', 404);
        }
        return sendSuccess(res, 'City updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeCity = async (req, res) => {
    try {
        const data = await City.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'City not found', 404);
        }
        return sendSuccess(res, 'City deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllCity,
    viewCityById,
    createCity,
    updateCity,
    removeCity
};
