'use strict';

const
    model = require('../../model/solicitarTrocaModel').solicitarTrocaModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        solicitarTroca = req.body;

    model.update(id, solicitarTroca).then(data => res.send(data));
}