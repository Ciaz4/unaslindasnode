const mongoose = require("../config/database");

const schemaServicios = new mongoose.Schema({
    id:{
        type:Number,
        required:[true, "El id identificador del servicio debe ser unico"],
        unique: true
    },
    nombre:{
        type:String,
        required:[true, "El nombre del servicio es requerido"]
    },
    duracion:{
        type:number,
        required:[true, "La duracion del servicio es requerido"]
    },
    descripcion:{
        type:String,
        required:[true, "La descripcion del servicio es requerido"]
    },
    precio:{
        type:Number,
        required:[true, "El precio del servicio es requerido"]
    },
    disponibilidad:{
        type:Boolean,
        required:[true, "La disponibilidad de servicio  es requerida"]
    },
   
});

const servicios = mongoose.model("empleado", schemaServicios);
module.exports = servicios;