const express = require('express');
const { viewAllStaff, viewStaffById, createStaff, updateStaff, removeStaff } = require('../controllers/staffController');

const router = express.Router();

router.get('/', viewAllStaff);
router.get('/:id', viewStaffById);
router.post('/', createStaff);
router.put('/:id', updateStaff);
router.delete('/:id', removeStaff);

module.exports = router;
