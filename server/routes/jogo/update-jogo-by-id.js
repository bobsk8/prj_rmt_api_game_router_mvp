'use strict';

const
    model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        jogo = req.body;

    model.update(id, jogo).then(data => res.send(data));
}