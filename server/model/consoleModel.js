'use strict';

const
  dao = require('../dao/index').consoleDao,
  dataModel = require('./dataModel');

let
  consoleModel;

  consoleModel = new dataModel(dao);

module.exports.consoleModel = consoleModel;