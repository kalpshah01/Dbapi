const express = require('express');
const { viewAllInventory, viewInventoryById, createInventory, updateInventory, removeInventory } = require('../controllers/inventoryController');

const router = express.Router();

router.get('/', viewAllInventory);
router.get('/:id', viewInventoryById);
router.post('/', createInventory);
router.put('/:id', updateInventory);
router.delete('/:id', removeInventory);

module.exports = router;
