'use strict';

const
    model = require('../../model/trocaModel').trocaModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        troca = req.body;

    model.update(id, troca).then(data => res.send(data));
}