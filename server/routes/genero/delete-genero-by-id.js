'use strict';

const
model = require('../../model/generoModel').generoModel;

module.exports = (req, res) => {
    let
        id = req.params.id;

    model.destroy(id).then(data => res.send(data));
}