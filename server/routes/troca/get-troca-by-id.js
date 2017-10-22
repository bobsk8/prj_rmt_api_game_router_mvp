'use strict';

const
    model = require('../../model/trocaModel').trocaModel;

module.exports = (req, res) => {
    let
        id = req.params.id;

    model.findById(id).then(data => res.send(data));
}