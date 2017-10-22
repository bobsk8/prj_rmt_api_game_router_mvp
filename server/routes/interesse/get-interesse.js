'use strict';

const
  model = require('../../model/interesseModel').interesseModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}