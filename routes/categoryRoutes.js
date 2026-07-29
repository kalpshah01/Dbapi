const express = require('express');
const { viewAllCategory, viewCategoryById, createCategory, updateCategory, removeCategory } = require('../controllers/categoryController');

const router = express.Router();

router.get('/', viewAllCategory);
router.get('/:id', viewCategoryById);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.delete('/:id', removeCategory);

module.exports = router;
