const mongoose = require("../config/database");

const schemaPagos = new mongoose.Schema({
    id:{
        type:Number,
        required:[true,"El id identificador de pago es obligatorio"],
        unique:true
    },
    usuario:{
        type:String,
        required:[true,"El usuario que realiza el pago es requerido"]
    },
    fechaPago:{
        type:Date,
        required:[true, "La fecha de pago es requerida"]
    },
    monto:{
        type:String,
        required:[true, "El metodo de pago es requerido"]
    },
    servicio:{
        type:String,
        required:[true, "El servcio realizado es requerido"]
    },
    estadoPago:{
        type:Boolean,
        required:[true, "El estado de pago es requerido"]
    }
});

const pago = mongoose.model("pagos", schemaPagos); 
module.exports = pago;