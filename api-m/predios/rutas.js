const express = require("express");
const {list, createUsuario} = require("./controller");

const ruta = express.Router();

ruta.route("/").get(list).post(createUsuario)

module.exports = ruta;