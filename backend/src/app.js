const express = require("express");
const morgan = require("morgan");

// imports
const routes = require('./routes');

const app = express();

app.use(express.json());

// para facilita parte de envio de arquivo
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 

app.use(routes);

module.exports = app;
