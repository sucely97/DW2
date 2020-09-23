const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const expressValidator = require('express-validator');




//importando routers
const employeeController = require('./controllers/employeeController');
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//settings

app.use('/employee', employeeController);
app.use(express.static(path.join(__dirname, 'views')));


//conexión con mongodb
mongoose.connect("mongodb://conecta:123456@localhost:27017/Parcial2", { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexión a la BD exitosa...');
});

connection.on('error', (err) => {
    console.log('Error en la conexión a la BD: ', err);
});



//definimos el uso para parsear json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ response: 'success' });
});


//conexión del servidor
app.listen(3000, () => {
    console.log('servidor listo...');
});

module.exports = app;