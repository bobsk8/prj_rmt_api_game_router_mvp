'use strict';

const
    model = require('../../model/solicitarTrocaModel').solicitarTrocaModel;

module.exports = (req, res) => {
    let
        id = req.params.id;

    model.findByUserId(id).then(data => res.send(data));
}