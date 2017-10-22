'use strict'

let
    multer = require('multer'),
    path = require('path'),
    model = require('../../model/jogoModel').jogoModel,
    extencao = '';



module.exports = (req, res) => {    
    
    let
        storage = multer.diskStorage({
            destination: function (req, file, callback) {
                callback(null, './uploads/')
            },
            filename: function (req, file, callback) {
                callback(null, file.fieldname + '-' + req.params.jogo_id + path.extname(file.originalname))
            }
        })


    let upload = multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            let ext = path.extname(file.originalname);
            extencao = path.extname(file.originalname);
            if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
                return callback(res.end('Only images are allowed'), null)
            }
            callback(null, true)
        }
    }).single('jogo');
    upload(req, res, function (err) {
        model.updateFoto(req.params.jogo_id,extencao)
        .then( d => res.end('File is uploaded'));
    })
};