const express = require('express'); // Importar express
const router = express.Router(); // Creamos el router
const OrderController = require('../controllers/OrderController'); //



const { authentication } = require('../middlewares/authentications');

router.post('/create', authentication, OrderController.create)
router.get('/showProductsOrders', OrderController.getAll)

module.exports = router;