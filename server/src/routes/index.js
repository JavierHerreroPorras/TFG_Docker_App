const express = require('express');
const api = express.Router();

const hotelCtrl = require('../controllers/hotel');
const user = require('../models/user.model');
const auth = require ('../middleware/auth');

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

api.post('/users', async (req, res) => {
    // Create a new user
    try {
       const User = new user(req.body)
       await User.save()
       const token = await User.generateAuthToken()
       res.status(201).send({ User, token })
    } catch (error) {
       res.status(400).send(error)
    }
 })
 
 api.post('/users/login', async(req, res) => {
    //Login a registered user
    try {
       const { email, password } = req.body
       const User = await user.findByCredentials(email, password)
       if (!User) {
          return res.status(401).send({error: 'Login failed! Check authentication credentials'})
       }
       const token = await User.generateAuthToken()
       res.send({ User, token })
    } catch (error) {
       res.status(400).send(error)
    }
 
 })

api.get('/users/me', auth, async(req, res) => {
   // View logged in user profile
   res.send(req.user)
})

module.exports = api;