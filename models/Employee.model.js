const mongoose = require('mongoose');

var EmployeeSchema = new mongoose.Schema({
    Nombre: { type: String },
    Puesto: { type: String },
    Lugar: { type: String },
    Fecha: { type: Date, unique: true },
    Telefono: { type: Number }
});

EmployeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(val);
}, 'invalid e-mail');

mongoose.model('employee', EmployeeSchema);