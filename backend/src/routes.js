const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const fs = require('fs');
const { promisify } = require('util');
const unlink = promisify(fs.unlink);

const upload = multer(multerConfig);

const connections = require('./database/connections');
const UploadController = require('./controllers/PostsController');

routes.get('/posts', UploadController.index);

routes.post(
    '/posts', 
    upload.single('file'), 
    UploadController.upload);

routes.delete('/posts/:id', UploadController.delete);



module.exports = routes;    