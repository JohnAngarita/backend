const mongoose = require("mongoose");

const collection = "usuarios";

const usuariosSchema = {
    nombre: {type: String, require: true},
    nombreUsuario: {type: String},
    cedula: {type: String, require: true},
    ciudad: {type: String, require: true}
}
const options = {
    timestamps: true,
}
const schema = new mongoose.Schema(usuariosSchema, options);

const Usuarios = mongoose.model(collection, schema);

module.exports = Usuarios;