const express = require('express');
 const {
    getFormations,
    getFormationById
 } = require('../controllers/formation-controller');

const router = express.Router();
 
router.get('/',getFormations);

router.get('/:id',getFormationById);
 
module.exports = router;