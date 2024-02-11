const express = require('express');

const {
    signupFormateur,
    loginFormateur,
    loginPartenaire,
    signupPartenaire
} = require('../controllers/auth-controller');



const router = express.Router();
 


router.post('/formateur/signup',signupFormateur);

router.post('/formateur/login',loginFormateur);

router.post('/partenaire/signup',signupPartenaire);

router.post('/partenaire/login',loginPartenaire);




module.exports = router;