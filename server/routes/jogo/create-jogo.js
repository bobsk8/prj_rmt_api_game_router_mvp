'use strict';

const
model = require('../../model/jogoModel').jogoModel;

module.exports = (req,res) => {
    let
        jogo = req.body;
    
    model.create(jogo).then(data => res.send(data));
}