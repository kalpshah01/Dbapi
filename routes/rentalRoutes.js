const express = require('express');
const { viewAllRental, viewRentalById, createRental, updateRental, removeRental } = require('../controllers/rentalController');

const router = express.Router();

router.get('/', viewAllRental);
router.get('/:id', viewRentalById);
router.post('/', createRental);
router.put('/:id', updateRental);
router.delete('/:id', removeRental);

module.exports = router;
