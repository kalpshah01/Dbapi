const express = require('express');
const { viewAllActor, viewActorById, createActor, updateActor, removeActor } = require('../controllers/actorController');

const router = express.Router();

router.get('/', viewAllActor);
router.get('/:id', viewActorById);
router.post('/', createActor);
router.put('/:id', updateActor);
router.delete('/:id', removeActor);

module.exports = router;
