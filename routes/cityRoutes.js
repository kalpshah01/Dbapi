const express = require('express');
const { viewAllCity, viewCityById, createCity, updateCity, removeCity } = require('../controllers/cityController');

const router = express.Router();

router.get('/', viewAllCity);
router.get('/:id', viewCityById);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', removeCity);

module.exports = router;
