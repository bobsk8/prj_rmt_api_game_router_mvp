'use strict';

const
  dao = require('../dao/index').generoDao,
  dataModel = require('./dataModel');

let
  generoModel;

generoModel = new dataModel(dao);

module.exports.generoModel = generoModel;