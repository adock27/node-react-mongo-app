const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();

app.use(express.json());
app.use(cors());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/entities', require('./routes/Entity'));

app.listen(4000, () => {
    console.log(`Servidor puerto: 4000`)
})