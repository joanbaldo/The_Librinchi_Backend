const express = require ("express"); //Importar express
const app = express(); //Inicializar express
const PORT = 3000;

app.use(express.json()); //Parsear (traducir) lo que se envíe desde el body


app.use('/categories', require('./routes/categories.js')); //RUTA A CATEGORÍAS 


app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))