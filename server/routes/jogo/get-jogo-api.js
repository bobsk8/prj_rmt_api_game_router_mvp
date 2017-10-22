'use strict';

const
    model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {

    model.getGamesByApi()
    .then(response => {
        res.send(response.body);        
    });
}