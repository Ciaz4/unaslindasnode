const mongoose = require("../config/database");

const schemaEmpleado = new mongoose.Schema({
    id:{
        type:Number,
        required:[true, "El id identificador de empleado debe ser unico"],
        unique: true
    },
    nombre:{
        type:String,
        required:[true, "El nombre del empleado es requerido"]
    },
    apellido:{
        type:String,
        required:[true, "El apellido del empleado es requerido"]
    },
    contacto:{
        type:Number,
        required:[true, "El contacto del empleado es requerido"]
    },
    email:{
        type:String,
        required:[true, "El email del empleado es requerido"]
    },
    fechaNacimiento:{
        type:Date,
        required:[true, "La fecha de nacimiento del empleado es requerida"]
    },
    cargo:{
        type:String,
        required:[true, "El cargo del empleado es requerido"]
    },
    salario:{
        type:String,
        required:[true, "El salario del empleado es requerido"]
    },
});

const empleado = mongoose.model("empleado", schemaEmpleado);
module.exports = empleado;