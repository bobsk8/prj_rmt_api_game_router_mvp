'use strict';

const
    model = require('../../model/generoModel').generoModel;

module.exports = (req, res) => {
    let
        genero = req.body;

    model.create(genero).then(data => res.send(data));
}