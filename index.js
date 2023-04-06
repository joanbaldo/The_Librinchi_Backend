const express = require ("express"); //Importamos express
const app = express(); //Inicializamos express
const PORT = 3000;
const { typeError } = require('./middlewares/errors'); //Inportamos el Middleware
app.use(express.json()); //Parsear (traducir) lo que se envíe desde el body


app.use('/categories', require('./routes/categories.js')); //RUTA A CATEGORÍAS 
app.use('/products', require('./routes/products.js')); //RUTA A PRODUCTOS 
app.use('/orders', require('./routes/orders.js')); //RUTA A PEDIDOS
app.use('/users', require('./routes/users.js')); //RUTA A USUARIOS


app.use(typeError) // Inicializamos Middleware

app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))