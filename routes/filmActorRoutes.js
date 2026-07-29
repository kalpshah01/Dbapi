const express = require('express');
const { viewAllFilmActor, viewFilmActorById, createFilmActor, updateFilmActor, removeFilmActor } = require('../controllers/filmActorController');

const router = express.Router();

router.get('/', viewAllFilmActor);
router.get('/:id', viewFilmActorById);
router.post('/', createFilmActor);
router.put('/:id', updateFilmActor);
router.delete('/:id', removeFilmActor);

module.exports = router;
