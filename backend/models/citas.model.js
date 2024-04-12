const mongoose = require("../config/database");

const schemaCita = new mongoose.Schema({
    id: {
        type:Number,
        required: [true , "el id identoficador de cita es obligatorio"],
        unique: true
    },
    usuario:{
        type:String,
        required: [true , "El usuario del cliente es requerido"]
    },
    fecha:{
        type:Date,
        required:[true, "La fecha de la cita es requerida"]
        },
    lugar:{
        type:String,
        required:[true, "El lugar de la cita es requerido"]
    },
    hora:{
        type:String,
        required:[true, "La hora de la cita es requerida"]
        },
    servicio:{
        type:String,
        required:[true, "El servicio deseado es requerido"]
    },
    empleado:{
        type:String,
        required:[true, "El empleado es requerido"]
        },
});

const citas = mongoose.model("citas", schemaCita);
module.exports = citas;