'use strict';

const
model = require('../../model/consoleModel').consoleModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        client = req.body;

    model.update(id,client).then(data => res.send(data));
}