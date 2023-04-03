const express = require ("express");
const app = express(); //inicializar express
const PORT = 3000;

app.use(express.json()) //parsear el body

app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))