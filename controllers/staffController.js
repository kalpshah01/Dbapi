const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Staff = require('../models/staff');

const viewAllStaff = async (req, res) => {
    try {
        const data = await Staff.find();
        return sendSuccess(res, 'Staff list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewStaffById = async (req, res) => {
    try {
        const data = await Staff.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Staff not found', 404);
        }
        return sendSuccess(res, 'Staff fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createStaff = async (req, res) => {
    try {
        const data = await Staff.create(req.body);
        return sendCreated(res, 'Staff created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateStaff = async (req, res) => {
    try {
        const data = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Staff not found', 404);
        }
        return sendSuccess(res, 'Staff updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeStaff = async (req, res) => {
    try {
        const data = await Staff.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Staff not found', 404);
        }
        return sendSuccess(res, 'Staff deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllStaff,
    viewStaffById,
    createStaff,
    updateStaff,
    removeStaff
};
