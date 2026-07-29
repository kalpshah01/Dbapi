const express = require('express');
const { viewAllCountry, viewCountryById, createCountry, updateCountry, removeCountry } = require('../controllers/countryController');

const router = express.Router();

router.get('/', viewAllCountry);
router.get('/:id', viewCountryById);
router.post('/', createCountry);
router.put('/:id', updateCountry);
router.delete('/:id', removeCountry);

module.exports = router;
