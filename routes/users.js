// CHASIS RUTA
const express = require('express');// Importamos express
const UserController = require('../controllers/UserController'); 
const { authentication } = require('../middlewares/authentications');
const router = express.Router();//Creamos el router

router.post('/createU', UserController.create); //Ruta endpoint CREAR USUARIO
router.post('/loginU', UserController.login); //Ruta endpoint LOGEAR USUARIO
router.get('/infoLogedU',authentication, UserController.getInfoUser) //Ruta endpoint VER USUARIO CONECTADO
router.delete('/logoutU', authentication, UserController.logout)//Ruta endpoint DES-LOGEAR USUARIO

module.exports = router;