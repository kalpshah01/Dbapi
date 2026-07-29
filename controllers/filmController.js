const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Film = require('../models/film');

const viewAllFilm = async (req, res) => {
    try {
        const data = await Film.find();
        return sendSuccess(res, 'Film list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewFilmById = async (req, res) => {
    try {
        const data = await Film.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Film not found', 404);
        }
        return sendSuccess(res, 'Film fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createFilm = async (req, res) => {
    try {
        const data = await Film.create(req.body);
        return sendCreated(res, 'Film created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateFilm = async (req, res) => {
    try {
        const data = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Film not found', 404);
        }
        return sendSuccess(res, 'Film updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeFilm = async (req, res) => {
    try {
        const data = await Film.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Film not found', 404);
        }
        return sendSuccess(res, 'Film deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllFilm,
    viewFilmById,
    createFilm,
    updateFilm,
    removeFilm
};
