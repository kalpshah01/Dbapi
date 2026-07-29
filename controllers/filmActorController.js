const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const FilmActor = require('../models/film_actor');

const viewAllFilmActor = async (req, res) => {
    try {
        const data = await FilmActor.find();
        return sendSuccess(res, 'FilmActor list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewFilmActorById = async (req, res) => {
    try {
        const data = await FilmActor.findById(req.params.id);
        if (!data) {
            return sendError(res, 'FilmActor not found', 404);
        }
        return sendSuccess(res, 'FilmActor fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createFilmActor = async (req, res) => {
    try {
        const data = await FilmActor.create(req.body);
        return sendCreated(res, 'FilmActor created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateFilmActor = async (req, res) => {
    try {
        const data = await FilmActor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'FilmActor not found', 404);
        }
        return sendSuccess(res, 'FilmActor updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeFilmActor = async (req, res) => {
    try {
        const data = await FilmActor.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'FilmActor not found', 404);
        }
        return sendSuccess(res, 'FilmActor deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllFilmActor,
    viewFilmActorById,
    createFilmActor,
    updateFilmActor,
    removeFilmActor
};
