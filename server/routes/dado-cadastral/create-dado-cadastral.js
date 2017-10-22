'use strict';

const
    model = require('../../model/dadoCadastralModel').dadoCadastralModel;

module.exports = (req, res) => {
    let
        dadoCadastral = req.body;

        model.createUser(dadoCadastral).then((data) => {
            res.send({ success: true });
          }).catch((err) => {
            console.log(err);
            res.send({ success: false });
          });
}