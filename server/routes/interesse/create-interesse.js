'use strict';

const
    model = require('../../model/interesseModel').interesseModel;

module.exports = (req, res) => {
    let
        interesse = req.body;

    model.create(interesse).then(data => res.send(data));
}