
let modeloProducto = require('./backend/models/productos.model')

exports.productos= async (req,res)=>{
    let listadoProductos = await modeloProducto.find();
    if(listadoProductos)
        res.status(200).json(listadoProductos);
    else
        res.status(404).json({message: "No se encontraron productos"});    
};