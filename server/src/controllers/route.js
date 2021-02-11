// Importamos el modelo de datos del hotel creado con mongoose
const Route = require('../models/route.model');

function getRoute(req, res){
    const routeId = req.params.routeId;

    Route.findById(routeId, (err, Route) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!Route) return res.status(404).send({message: `La ruta no existe`});
  
        res.status(200).send({ Route });
    });
}

function getRoutes(req, res){
    Route.find({}, (err, Routes) => {
        if (err) return res.status(500).send({message: `Error al realizar la petición ${err}`});
        if(!Routes) return res.status(404).send({message: `No existen rutas`});

        res.status(200).send({Routes});
    });
}

function saveRoute(req, res){

    console.log('POST /api/Route');
    console.log(req.body);

    // Creamos una instancia del producto
    let route = new Route();
    route.name = req.body.name;
    route.description = req.body.description;
    route.imageURL = req.body.imageURL;
    route.duration = req.body.duration;
    route.people = req.body.people;
    route.price = req.body.price;
  
    route.save((err, RouteStored) => {
        if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err} `});

        res.status(200).send({product: RouteStored});
    });
}

module.exports = {
    getRoute,
    getRoutes,
    saveRoute,
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
