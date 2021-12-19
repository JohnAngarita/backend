const express = require("express");
const usuarios = require("./users/rutas");

const api = express.Router();

api.use("/usuarios", usuarios)

module.exports = api;