const exp = require('express');
const app = exp();
const logger = require('morgan');
const path = require('path');

app.use(exp.static(path.join(__dirname, './assets')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, './frontend/views'))
app.use(logger('dev'));

app.use(exp.urlencoded({extended: false}));
app.use(exp.json())



app.get('/productos/:ref', async (req, res)=>{
    let productoEncontrado = await modeloProducto.findOne({referencia:req.params.ref});
    if(productoEncontrado)
        res.status(200).json(productoEncontrado);
    else
        res.status(404).json({"errorr":"Producto no encontrado"})    
});


app.put("/producto/.ref", async (req,res)=>{
    const productoEditado = {
        referencia: req.params.ref,
        nombre: req.body -nombreProducto,
        descripcion: req.body.descripcionProducto,
        precio: req.body.precioProducto,
        stock: req.body.stockProducto,
        imagen: req.body.imagenProducto,
        habilitado: true,
    };
    let Actualizacion= await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado);
    if(Actualizacion)
        res.status(280).json({"mensaje": "actualización exitoso"})
    else
        res.status(404).json({"mensaje": "Se presentó un error"});
});

app.delete("/producto/.id", async (req,res)=>{
    console.log(rep.params.id, req.body.referenciaProducto)
    let eliminacion= await modeloProducto.findOneAndDelete({referencia:req.params.id});
    if(eliminacion)
        res.status(200).json({"mensaje":"eliminación exitosa"})
    else
        res.status(404).json({"mensaje":"No se presento un error"})
});


app.listen(process.env.PORT, ( )=>{
    console.log("servidor en linea");
});

let modeloProducto = require('./backend/models/productos.model')