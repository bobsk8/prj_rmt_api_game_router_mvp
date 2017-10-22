'use strict';

const
  model = require('../../model/dadoCadastralModel').dadoCadastralModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}