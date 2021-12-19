const { useColors } = require("debug/src/browser");
const { json } = require("express/lib/response");
const res = require("express/lib/response");
const Usuarios = require("./modelos");

const list = async (res, req) => {
    const usuarios = await Usuarios.find();
    res.status(200).json({usuarios})
}
const createUsuario = async (req, res) => {
    const {nombre, nombreUsuario, cedula} = req.body;
    const usuarioFound = await Usuario.find({nombreUsuario});
    if (usuarioFound.lengh === 0){
        const usuario = {
            nombre: nombre,
            nombreUsuario,
            cedula
    };

    const newUsuario = new Usuario(usuario);
    newUsuario.save().then((crearUsuario) => {
        res.status(200).json({createUsuario});
    })
    }else{
        res.status(400).json({error: "nombre usuario existe"});
    }
}

module.exports = {
    list,
    createUsuario     
}