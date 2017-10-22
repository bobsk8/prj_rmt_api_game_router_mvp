'use strict';

const
  dao = require('../dao/index').trocaDao,
  dataModel = require('./dataModel');

let
  trocaModel;

trocaModel = new dataModel(dao);

module.exports.trocaModel = trocaModel;