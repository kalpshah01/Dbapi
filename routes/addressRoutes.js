const express = require('express');
const { viewAllAddress, viewAddressById, createAddress, updateAddress, removeAddress } = require('../controllers/addressController');

const router = express.Router();

router.get('/', viewAllAddress);
router.get('/:id', viewAddressById);
router.post('/', createAddress);
router.put('/:id', updateAddress);
router.delete('/:id', removeAddress);

module.exports = router;
