'use strict';

const
    model = require('../../model/solicitarTrocaModel').solicitarTrocaModel;

module.exports = (req, res) => {
    let
        solicitarTroca = req.body;

    model.create(solicitarTroca).then(data => res.send(data));
}