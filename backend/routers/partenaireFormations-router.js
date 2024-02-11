const express = require('express');

const {
    getpartenaireFormations, 
    getformationsEncours
} = require('../controllers/partenaireFormations-controller');



const router = express.Router();
 


router.get('/partenaire/:partenaireId',getpartenaireFormations);
router.get('/partenaire/getFormations/formationsEnCours',getformationsEncours);



module.exports = router;