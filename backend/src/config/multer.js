const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

module.exports = {
    // diretorio que dos arquivo
    dest: path.resolve(__dirname, '..', '..','tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..','tmp', 'uploads'));
        },        
        filename: (req, file, cb) => {
            // cryptografar as imagens em caso de nome duplicado no envio
            crypto.randomBytes(16, (err, hash) => {
                if(err) cd(err);

                // se der certo
                //const filename = `nome criptografado` - `nome original do arquivo`
                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        }        
    }),
    //limites do arquivo 
    limits:{
        //para ter 2MB 
        fileSize: 2 * 1024 * 1024
    },
    //filtro de carregamento do arquivo
    fileFilter: ( req, file, cb) => {
        //formato de arquivos
        const allowedMimes = [
            "image/jpeg",
            "image/pjpeg",
            "image/jpg",
            "image/png",
            "image/gif",
        ];

        if(allowedMimes.includes(file.mimetype)){
            cb(null, true);
        } else{
            cd(new Error("Invalid file type"));
        } 
    },
};