const express = require('express');

const {
    getDomaines
} = require('../controllers/domaine-controller');



const router = express.Router();
 


router.get('/domaines',getDomaines);




module.exports = router;