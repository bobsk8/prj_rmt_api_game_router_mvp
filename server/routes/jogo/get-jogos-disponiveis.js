'use strict';

const
    model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {
    let
        id = req.session.user.id;

    model.findDisponiveis(id).then(data => res.send(data));
}