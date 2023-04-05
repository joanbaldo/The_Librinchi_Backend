const express = require('express'); // Aquí nos importamos expres (siempre 1er paso)
const router = express.Router(); // Importamos e inicializamos router

const CategoryController = require('../controllers/CategoryController');  // Esto lo crea/importa automáticamente la linea 6

router.post('/categoryC', CategoryController.create) // Creamos ruta URL para CREAR categoría
router.get('/showAllC', CategoryController.getAll) // Creamos ruta URL para MOSTRAR todas las categorias
router.get('/showCbyId/:id', CategoryController.getById) // Creamos ruta URL para MOSTRAR las categorias por ID
router.put('/updateCbyId/:id', CategoryController.updateCategory) // Creamos ruta URL para ACTUALIZAR las categorias por ID
router.delete('/deleteCbyId/:id', CategoryController.deleteCategory) // Creamos ruta URL para ELIMINAR las categorias por ID
router.get('/filterCbyName/:name', CategoryController.getOneByName) // Creamos ruta URL para BUSCAR las categorias por NOMBRE



module.exports = router