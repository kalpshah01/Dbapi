const express = require('express');
const { viewAllFilm, viewFilmById, createFilm, updateFilm, removeFilm } = require('../controllers/filmController');

const router = express.Router();

router.get('/', viewAllFilm);
router.get('/:id', viewFilmById);
router.post('/', createFilm);
router.put('/:id', updateFilm);
router.delete('/:id', removeFilm);

module.exports = router;
