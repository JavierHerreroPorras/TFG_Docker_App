const express = require('express');
const api = express.Router();
const hotelCtrl = require('../controllers/hotel');

//Añadimos escuchas o peticiones a la API REST
// 1. Cuando accedemos a localhost:3001/hola, se ejecuta un callback, donde
//     req es la petición y res es la respuesta
// 2. Para acceder a los parametros, podemos utilizar req (request) mediante req.params
//    Además necesitamos especificar los parámetros en la ruta con /:parametro
/*app.get('/hola/:name', (req, res) => {
    res.send({ message: `Hola ${req.params.name}!` });
})*/

// Ruta de tipo GET
api.get('/hotel', hotelCtrl.getHotels);
api.get('/hotel/:hotelId', hotelCtrl.getHotel);

//Ruta de tipo POST
api.post('/hotel', hotelCtrl.saveHotel);

module.exports = api;