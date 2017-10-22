'use strict';

const
  model = require('../../model/generoModel').generoModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}