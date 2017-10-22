'use strict';

const
    model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {
    let
        id = req.params.user_id;

    model.findByUserId(id).then(data => res.send(data));
}