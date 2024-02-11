const express = require('express');
 const {
    getFormations,
    getFormationById
 } = require('../controllers/formation-controller');

const router = express.Router();
 
router.get('/formations/',getFormations);

router.get('/formations/:id',getFormationById);
 
module.exports = router;