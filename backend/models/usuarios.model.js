const mongoose = require("../config/database");

const shemaUsuarios = new mongoose.Schema({ 
    _id:{
        type:Number,
        required: [true,"el id es obligatorio"],
        unique: true
    },
    nombre:{
        type:String,
        Required:[true,"el nombre es requerido"]
    },
    Apellido:{
        type:String,
        Required:[true, "el apellido es requerido"]
    },
    contacto:{
        type:Number,
        required:[true,"el contacto es requerido"]
       
    },
    email:{
        type:String,
        required:[true,"el email es requerido"]
    },
    Nombredeusuario:{
        type:String,
        required:[true,"el nombredeusuario es requerido"]
    },
    contrasena:{
        type:String,
        required:[true,"la contrasena es requerida"]
    },
    rol:{
        type:String,
        required:[true,"el rol es requerido"]
    },
    });

const usuarios = mongoose.model("usuarios", shemaUsuarios);
module.exports = usuarios;