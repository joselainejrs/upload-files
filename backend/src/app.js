const express = require("express");
const morgan = require("morgan");
const path = require('path');
const cors = require('cors');

// imports
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

// para facilita parte de envio de arquivo
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev')); 


app.use('/file',
    express.static(path.resolve(__dirname, '..','tmp', 'uploads'))
);
app.use(routes);

module.exports = app;
