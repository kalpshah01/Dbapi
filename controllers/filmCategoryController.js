const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const FilmCategory = require('../models/film_category');

const viewAllFilmCategory = async (req, res) => {
    try {
        const data = await FilmCategory.find();
        return sendSuccess(res, 'FilmCategory list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewFilmCategoryById = async (req, res) => {
    try {
        const data = await FilmCategory.findById(req.params.id);
        if (!data) {
            return sendError(res, 'FilmCategory not found', 404);
        }
        return sendSuccess(res, 'FilmCategory fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createFilmCategory = async (req, res) => {
    try {
        const data = await FilmCategory.create(req.body);
        return sendCreated(res, 'FilmCategory created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateFilmCategory = async (req, res) => {
    try {
        const data = await FilmCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'FilmCategory not found', 404);
        }
        return sendSuccess(res, 'FilmCategory updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeFilmCategory = async (req, res) => {
    try {
        const data = await FilmCategory.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'FilmCategory not found', 404);
        }
        return sendSuccess(res, 'FilmCategory deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllFilmCategory,
    viewFilmCategoryById,
    createFilmCategory,
    updateFilmCategory,
    removeFilmCategory
};
