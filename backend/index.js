const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// import routes
const authRoutes = require('./routes/auth');



// Creamos el servidor
const app = express();
const { authApply, sign } = require("./shared/jwt");

// Conectamos a la BD
conectarDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes 
app.use('/api/productos', require('./routes/producto'));
app.use('/api/entities', require('./routes/Entity'));
app.use('/api/employees', require('./routes/Employee'));


app.post('/secure', function (req, res) {
    const token = sign("anderson@gmail.com")
    console.log(token);
    res.json({ jwt: token });
});


app.post('/check/post', authApply(), function (req, res) {
    return res.status(200).send({msg: "Hello World"});
});

// route middlewares
app.use('/api/user', authRoutes);

app.listen(4000, () => {
    console.log(`Servidor puerto: 4000`)
})