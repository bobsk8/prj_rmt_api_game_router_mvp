'use strict';

const
  model = require('../../model/trocaModel').trocaModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}