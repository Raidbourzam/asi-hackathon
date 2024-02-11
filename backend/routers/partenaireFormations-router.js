const express = require('express');

const {
    getpartenaireFormations, 
    getformationsEncours,
    getAllPartenaire
} = require('../controllers/partenaireFormations-controller');



const router = express.Router();
 


router.get('/partenaire/partenaireFormations/:partenaireId',getpartenaireFormations);
router.get('/partenaire/getFormations/formationsEnCours',getformationsEncours);
router.get('/partenaire/Allpartenaire',getAllPartenaire);



module.exports = router;