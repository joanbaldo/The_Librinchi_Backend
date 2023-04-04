const express = require('express'); // Aquí nos importamos expres (siempre 1er paso)
const router = express.Router(); // Importamos e inicializamos router

const CategoryController = require('../controllers/CategoryController');  // Esto lo crea/importa automáticamente la linea 6

router.post('/categoryC', CategoryController.create) // Creamos ruta URL para CREAR categoría



module.exports = router;