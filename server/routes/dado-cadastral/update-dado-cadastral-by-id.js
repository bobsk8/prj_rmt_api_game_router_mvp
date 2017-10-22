'use strict';

const
    model = require('../../model/dadoCadastralModel').dadoCadastralModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        dadoCadastral = req.body;

    model.update(id, dadoCadastral).then(data => res.send(data));
}