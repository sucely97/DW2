const mongoose = require('mongoose');

var EmployeePerSchema = new mongoose.Schema({
    dpi: { type: Number, unique: true },
    nip: { type: Number, unique: true },
    primernombre: { type: String },
    segundonombre: { type: String },
    primerapellido: { type: String },
    segundoapellido: { type: String },
    fecha: { type: Date },
    apellidocasada: { type: String },
    Pnominal: { type: Number, unique: true },
    Pfuncional: { type: Number, unique: true },
    Pnominal: { type: Number, unique: true },
    labora: { type: Number, unique: true },
    EmailI: { type: Number, unique: true },
    EmailP: { type: Number, unique: true },
    TelCasa: { type: Number, unique: true },
    TelCelular: { type: Number, unique: true },
});

mongoose.model('employee', EmployeePerSchema);