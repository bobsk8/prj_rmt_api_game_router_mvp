'use strict';

const
  dao = require('../dao/index').interesseDao,
  dataModel = require('./dataModel');

let
  interesseModel;

interesseModel = new dataModel(dao);

module.exports.interesseModel = interesseModel;