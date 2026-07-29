const express = require('express');
const { viewAllLanguage, viewLanguageById, createLanguage, updateLanguage, removeLanguage } = require('../controllers/languageController');

const router = express.Router();

router.get('/', viewAllLanguage);
router.get('/:id', viewLanguageById);
router.post('/', createLanguage);
router.put('/:id', updateLanguage);
router.delete('/:id', removeLanguage);

module.exports = router;
