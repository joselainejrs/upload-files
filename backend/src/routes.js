const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const fs = require('fs');
const { promisify } = require('util');
const unlink = promisify(fs.unlink);

const upload = multer(multerConfig);

const connections = require('./database/connections');
const UploadController = require('./controllers/UploadController');

routes.get('/uploads', UploadController.index);

routes.post(
    '/uploads', 
    upload.single('file'), 
    UploadController.upload);

routes.delete('/uploads/:id', UploadController.delete);



module.exports = routes;