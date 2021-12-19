const validacionCrearUsuario = (req, res, next) => {
    const {nombre, nombreUsuario, cedula} = req.body;
    if(!nombre || !nombreUsuario || !cedula){
        res.status(400).json({error: "El campo esta vacio"});

    }else{
        next();
    }

}

module.exports = {
    validacionCrearUsuario
}