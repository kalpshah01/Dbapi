const express = require('express');
const { viewAllStore, viewStoreById, createStore, updateStore, removeStore } = require('../controllers/storeController');

const router = express.Router();

router.get('/', viewAllStore);
router.get('/:id', viewStoreById);
router.post('/', createStore);
router.put('/:id', updateStore);
router.delete('/:id', removeStore);

module.exports = router;
