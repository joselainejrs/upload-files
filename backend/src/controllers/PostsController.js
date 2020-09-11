const connections = require('../database/connections');


module.exports ={
    async index(req, res) {
        const files = await connections('images').select('*');
        
            return res.json(files)
        
        },

    async upload(req, res) {
        const { originalname: name, size, filename: key} = req.file;
        
        const files =  await connections('images').insert({
                name,
                size, 
                key, 
                url:'',
        })
        
        return res.json(files)
    },

    async delete(req, res) {
        const { id } = req.params;
    
        await connections('images')
            .where({ id, id })
            .delete()
        
            return res.json()
        
        },
}