//Requerir Express
const express = require('express');

//Metodo Router
const router = express.Router();

//Llamar controller
const controller = require('../controllers/mainController');


router.get('/',controller.home);


//Exportar
module.exports = router
