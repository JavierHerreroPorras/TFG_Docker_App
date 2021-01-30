
const mongoose = require('mongoose');
const express = require('express');
const app = require('./src/app');
const PORT = 8080;

require('./src/database/database.connection');

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});