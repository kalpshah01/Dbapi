const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Language = require('../models/language');

const viewAllLanguage = async (req, res) => {
    try {
        const data = await Language.find();
        return sendSuccess(res, 'Language list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewLanguageById = async (req, res) => {
    try {
        const data = await Language.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Language not found', 404);
        }
        return sendSuccess(res, 'Language fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createLanguage = async (req, res) => {
    try {
        const data = await Language.create(req.body);
        return sendCreated(res, 'Language created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateLanguage = async (req, res) => {
    try {
        const data = await Language.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Language not found', 404);
        }
        return sendSuccess(res, 'Language updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeLanguage = async (req, res) => {
    try {
        const data = await Language.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Language not found', 404);
        }
        return sendSuccess(res, 'Language deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllLanguage,
    viewLanguageById,
    createLanguage,
    updateLanguage,
    removeLanguage
};
