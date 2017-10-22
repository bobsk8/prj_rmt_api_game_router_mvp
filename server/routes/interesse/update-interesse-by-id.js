'use strict';

const
    model = require('../../model/interesseModel').interesseModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        interesse = req.body;

    model.update(id, interesse).then(data => res.send(data));
}