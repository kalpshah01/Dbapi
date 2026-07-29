const express = require('express');
const { viewAllCustomer, viewCustomerById, createCustomer, updateCustomer, removeCustomer } = require('../controllers/customerController');

const router = express.Router();

router.get('/', viewAllCustomer);
router.get('/:id', viewCustomerById);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', removeCustomer);

module.exports = router;
