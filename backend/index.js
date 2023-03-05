const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");
require('dotenv').config({ path: 'variables.env' });
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/productos', require('./routes/producto'));
app.use('/api/entities', require('./routes/Entity'));
app.use('/api/employees', require('./routes/Employee'));


app.post('/secure', function (req, res) {
    const token = jwt.sign({ user: { id: 1, name: 'ME!', role: 'average' } }, 'dsfklgj');
    console.log(token);
    res.json({ jwt: token });
});


app.post('/check/post', function (req, res) {
    const token = req.body.jwt;
    console.log('token: ' + token);
    const x = jwt.verify(token, 'dsfklgj', function (err, decoded) {
        if (err) throw err;
        console.log(decoded);
    });
    console.log(x);
    if (x != true) {
        res.json({ auth: false });
    } else {
        res.json({ auth: true });
    }
});

app.listen(4000, () => {
    console.log(`Servidor puerto: 4000`)
})