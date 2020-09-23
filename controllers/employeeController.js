const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.json('Exito!!');
});

router.post('/', (req, res) => {
    insertRecords(req, res);
});

function insertRecords(req, res) {
    var employee = new employee();
    employee.nombre = req.body.nombre;
    employee.puesto = req.body.puesto;
    employee.lugar = req.body.lugar;
    employee.fecha = req.body.fecha;
    employee.telefono = req.body.telefono;
    employee.save((err, doc) => {
        if (err.name == validationError)
            handleValidationError(err, req.body);
        else {
            console.log('error de inserción:  ' + err);
        }
    });

}

router.get('list', (req, res) => {
    res.json('from list');
});



module.exports = router;