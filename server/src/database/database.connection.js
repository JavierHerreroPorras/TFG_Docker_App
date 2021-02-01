const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const config = require('./database.config');

mongoose.connect(config.dbConnectionURL.LOCALURL, config.options);
const db = mongoose.connection;

// If the connection is stablish
mongoose.connection.on('connected', function () {  
    console.log('Mongoose default connection open to ' + config.dbConnectionURL.LOCALURL);
  }); 
  
// If the connection throws an error
  mongoose.connection.on('error',function (err) {  
    console.log('Mongoose default connection error: ' + err);
  }); 
  
// If the connection is disconnected
  mongoose.connection.on('disconnected', function () {  
    console.log('Mongoose default connection disconnected'); 
  });
