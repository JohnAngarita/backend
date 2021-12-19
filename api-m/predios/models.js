const mongoose = require("mongoose");

const collection = "predios";

const prediosSchema = {
    nombre: {type: String, require: true},
    direccion: {type: String},
    id: {type: String, require: true},
    propietario: {type: mongoose.Schema.Types.ObjectId, ref: "usuarios"}
}
const options = {
    timestamps: true,
}
const schema = new mongoose.Schema(prediosSchema, options);

const Predios = mongoose.modelos(collection, schema);

module.exports = Predios;