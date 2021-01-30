// Importamos el modelo de datos del hotel creado con mongoose
const Hotel = require('../models/hotel.model');

function getHotel(req, res){
    const hotelId = req.params.hotelId;

    Hotel.findById(hotelId, (err, hotel) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!hotel) return res.status(404).send({message: `El hotel no existe`});
  
        res.status(200).send({ hotel });
    });
}

function getHotels(req, res){
    Hotel.find({}, (err, hotels) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!hotels) return res.status(404).send({message: `No existen hoteles`});

        res.status(200).send({hotels});
    });
}

function saveHotel(req, res){

    console.log('POST /api/hotel');
    console.log(req.body);

    // Creamos una instancia del producto
    let hotel = new Hotel();
    hotel.name = req.body.name;
    hotel.url = req.body.url;
    hotel.imageURL = req.body.imageURL;
  
    hotel.save((err, hotelStored) => {
        if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `});

        res.status(200).send({product: hotelStored});
    });
}

module.exports = {
    getHotel,
    getHotels,
    saveHotel,
}

// ---> Fundamentos teóricos <---

// GET se utiliza para pedir datos al servidor, y este responde con los datos que necesite
// POST se utiliza para mandar datos al servidor (Los datos viajan en el cuerpo de la petición)--> Mejor mandarlos en JSON
// DELETE petición desde el cliente para borrar un recurso de la base de datos
// PUT actualización de un recurso: Cambiar el nombre, precio, etc.

// Codigos de respuesta:
//    2xx --> Respuesta correcta
//    3xx --> Redirección
//    4xx --> No existen recursos en el servidor (404), 403 es acceso restringido. 
//    5xx --> Error en el servidor

// Cabecera o Header --> Para la mayoría de peticiones
