'use strict';

const
  model = require('../../model/jogoModel').jogoModel;

module.exports = (req, res) => {
  // model.findAll().then(data => res.send(data));
  model.getGamesByApi().then(data => res.send(data));
}