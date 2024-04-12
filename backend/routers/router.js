const exp = require('express');
var router = exp.Router();
const ControllerProductos = require('../controller/productos.controller')

router.get("/listarproductos", ControllerProductos.productos)