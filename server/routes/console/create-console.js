'use strict';

const
    model = require('../../model/consoleModel').consoleModel;

module.exports = (req, res) => {
    let
        console = req.body;

    model.create(console).then(data => res.send(data));
}