const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Actor = require('../models/actor');

const viewAllActor = async (req, res) => {
    try {
        const data = await Actor.find();
        return sendSuccess(res, 'Actor list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewActorById = async (req, res) => {
    try {
        const data = await Actor.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Actor not found', 404);
        }
        return sendSuccess(res, 'Actor fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createActor = async (req, res) => {
    try {
        const data = await Actor.create(req.body);
        return sendCreated(res, 'Actor created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateActor = async (req, res) => {
    try {
        const data = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Actor not found', 404);
        }
        return sendSuccess(res, 'Actor updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeActor = async (req, res) => {
    try {
        const data = await Actor.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Actor not found', 404);
        }
        return sendSuccess(res, 'Actor deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllActor,
    viewActorById,
    createActor,
    updateActor,
    removeActor
};
