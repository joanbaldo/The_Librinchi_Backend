const express = require ("express");
const app = express(); //inicializar express
const PORT = 3000;

app.use(express.json()); //parsear el body


app.use('/categories', require('./routes/categories.js')); //RUTA A CATEGORÍAS 


app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))