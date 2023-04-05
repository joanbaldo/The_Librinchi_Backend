const express = require('express'); // Aquí nos importamos expres (siempre 1er paso)
const router = express.Router(); // Importamos e inicializamos router

const ProductController = require('../controllers/ProductController');// Esto lo crea/importa automáticamente la linea 6

router.post('/productC', ProductController.create) // Creamos ruta URL para CREAR producto
router.put('/productU/:id', ProductController.updateProduct) // Creamos ruta URL para CREAR producto
router.get('/showPbyId/:id', ProductController.getById) // Creamos ruta URL para MOSTRAR los productos por ID
router.delete('/deletePbyId/:id', ProductController.deleteProduct) // Creamos ruta URL para ELIMINAR los productos por ID
router.get('/filterPbyName/:name', ProductController.getOneByName) // Creamos ruta URL para BUSCAR las categorias por NOMBRE
router.get('/filterPbyPrice/:price', ProductController.getOneByPrice) // Creamos ruta URL para BUSCAR las categorias por NOMBRE

module.exports = router
