'use strict';

const
  model = require('../../model/consoleModel').consoleModel;

module.exports = (req, res) => {
  model.findAll().then(data => res.send(data));
}