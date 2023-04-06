// CHASIS RUTA
const express = require('express');// Importamos express
const UserController = require('../controllers/UserController'); 
const { authentication } = require('../middlewares/authentications');
const router = express.Router();//Creamos el router

router.post('/createU', UserController.create);///ruta creada

module.exports = router;