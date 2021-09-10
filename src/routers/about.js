//Requerir Express
const express = require('express');

//Requerir Path
const path = require('path');

//Metodo Router
const router = express.Router();

//Llamar controller
const controller = require('../controllers/aboutController');


router.get('/',controller.about);


//Exportar
module.exports = router