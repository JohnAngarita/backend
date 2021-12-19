const express = require("express");
const {list, createUsuario} = require("./controller");
const {validacionCrearUsuario} = require("../middlewares/validar");

const ruta = express.Router();

ruta.route("/").get(list).post(validacionCrearUsuario, createUsuario)

module.exports = ruta;