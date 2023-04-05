const express = require ("express"); //Importar express
const app = express(); //Inicializar express
const PORT = 3000;

app.use(express.json()); //Parsear (traducir) lo que se envíe desde el body


app.use('/categories', require('./routes/categories.js')); //RUTA A CATEGORÍAS 
app.use('/products', require('./routes/products.js')); //RUTA A PRODUCTOS 
app.use('/orders', require('./routes/orders.js')); //RUTA A PEDIDOS


app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))