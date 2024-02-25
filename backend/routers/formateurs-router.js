const express = require('express');
 const {
    getFormateurs,
    getFormateurById
 } = require('../controllers/formateurs-controller');

const router = express.Router();
 
router.get('/formateurs',getFormateurs);

router.get('/formateur/getFormateur/:formateurId',getFormateurById);
 
module.exports = router;