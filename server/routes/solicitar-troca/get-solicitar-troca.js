'use strict';

const
  model = require('../../model/solicitarTrocaModel').solicitarTrocaModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}