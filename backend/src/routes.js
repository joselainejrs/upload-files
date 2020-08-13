const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const connections = require('./database/connections');

routes.get('/uploads', async (req, res) => {
    const files = await connections('images').select('*');
    
        return res.json(files)
    
    });

routes.post('/uploads', multer(multerConfig).single('file'), async (req, res) => {
    const { originalname: name, size, filename: key} = req.file;

   const files =  await connections('images').insert({
        name,
        size, 
        key, 
        url:'',
    })

    return res.json(files)
});

routes.delete('/uploads/:id', async (req, res) => {
    const { id } = req.params;

    await connections('images')
        .where({ id, id })
        .delete();
    
        return res.json()
    
    });



module.exports = routes;