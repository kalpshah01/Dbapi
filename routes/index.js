const express = require('express');

const router = express.Router();

const actorRoutes=require('./actorRoutes');
const languageRoutes=require('./languageRoutes');
const categoryRoutes=require('./categoryRoutes');
const filmRoutes=require('./filmRoutes');
const  filmActorRoutes=require('./filmActorRoutes');
const filmCategoryRoutes=require('./filmCategoryRoutes');
const countryRoutes=require('./countryRoutes');
const cityRoutes=require('./cityRoutes');
const addressRoutes=require('./addressRoutes');
const storeRoutes=require('./storeRoutes');
const staffRoutes=require('./staffRoutes');
const customerRoutes=require('./customerRoutes');
const inventoryRoutes=require('./inventoryRoutes');
const rentalRoutes=require('./rentalRoutes');

router.use('/actors', actorRoutes);
router.use('/languages', languageRoutes);
router.use('/categories', categoryRoutes);
router.use('/films', filmRoutes);
router.use('/film-actors', filmActorRoutes);        
router.use('/film-categories', filmCategoryRoutes);
router.use('/countries', countryRoutes);
router.use('/cities', cityRoutes);
router.use('/addresses', addressRoutes);
router.use('/stores', storeRoutes);
router.use('/staff', staffRoutes);
router.use('/customers', customerRoutes);
router.use('/inventories', inventoryRoutes);
router.use('/rentals', rentalRoutes);

module.exports = router;