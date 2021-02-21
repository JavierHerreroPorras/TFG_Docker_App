// Importamos los modulos/librerias necesarios (se pueden importar de otra manera)
//const express = require('express');
const express = require('express');
const bodyParser = require('body-parser'); 
const cors = require('cors');
const path = require('path');
const app = express();

const api = require('./routes');

const CLIENT_BUILD_PATH = path.join(__dirname, "../../client/dist");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use('/api', api);

// Static files
app.use(express.static(CLIENT_BUILD_PATH));

// Server React Client
app.get("/", function(req, res) {
    res.sendFile(path.join(CLIENT_BUILD_PATH , "index.html"));
  });
  

module.exports = app;