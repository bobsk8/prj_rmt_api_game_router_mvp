'use strict';

const
    model = require('../../model/trocaModel').trocaModel;

module.exports = (req, res) => {
    let
        troca = req.body;

    model.create(troca).then(data => res.send(data));
}