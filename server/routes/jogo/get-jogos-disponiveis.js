'use strict';

const
    model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {
    let
        id = req.session.user.id,
        solicitante_id = req.session.user.id;

    model.findDisponiveis(id,solicitante_id).then(data => res.send(data));
}