const { sendSuccess, sendCreated, sendError } = require('../utils/response');
const Category = require('../models/category');

const viewAllCategory = async (req, res) => {
    try {
        const data = await Category.find();
        return sendSuccess(res, 'Category list fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const viewCategoryById = async (req, res) => {
    try {
        const data = await Category.findById(req.params.id);
        if (!data) {
            return sendError(res, 'Category not found', 404);
        }
        return sendSuccess(res, 'Category fetched successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const createCategory = async (req, res) => {
    try {
        const data = await Category.create(req.body);
        return sendCreated(res, 'Category created successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const updateCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!data) {
            return sendError(res, 'Category not found', 404);
        }
        return sendSuccess(res, 'Category updated successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

const removeCategory = async (req, res) => {
    try {
        const data = await Category.findByIdAndDelete(req.params.id);
        if (!data) {
            return sendError(res, 'Category not found', 404);
        }
        return sendSuccess(res, 'Category deleted successfully', data);
    } catch (error) {
        return sendError(res, error.message);
    }
};

module.exports = {
    viewAllCategory,
    viewCategoryById,
    createCategory,
    updateCategory,
    removeCategory
};
