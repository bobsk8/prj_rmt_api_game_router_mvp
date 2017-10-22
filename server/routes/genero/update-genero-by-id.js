'use strict';

const
    model = require('../../model/generoModel').generoModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        genero = req.body;

    model.update(id, genero).then(data => res.send(data));
}