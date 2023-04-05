const express = require('express'); // Aquí nos importamos expres (siempre 1er paso)
const router = express.Router(); // Importamos e inicializamos router

const ProductController = require('../controllers/ProductController');// Esto lo crea/importa automáticamente la linea 6

router.post('/productC', ProductController.create) // Creamos ruta URL para CREAR producto
router.put('/productU/:id', ProductController.updateProduct) // Creamos ruta URL para CREAR producto
router.get('/showPbyId/:id', ProductController.getById) // Creamos ruta URL para MOSTRAR las categorias por ID



module.exports = router
