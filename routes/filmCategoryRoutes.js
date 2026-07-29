const express = require('express');
const { viewAllFilmCategory, viewFilmCategoryById, createFilmCategory, updateFilmCategory, removeFilmCategory } = require('../controllers/filmCategoryController');

const router = express.Router();

router.get('/', viewAllFilmCategory);
router.get('/:id', viewFilmCategoryById);
router.post('/', createFilmCategory);
router.put('/:id', updateFilmCategory);
router.delete('/:id', removeFilmCategory);

module.exports = router;
