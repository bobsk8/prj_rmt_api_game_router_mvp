'use strict';

const
  dao = require('../dao/index').solicitarTrocaDao,
  dataModel = require('./dataModel');

let
  solicitarTrocaModel;

solicitarTrocaModel = new dataModel(dao);

solicitarTrocaModel.findByUserId = _findByUserId;
solicitarTrocaModel.create = _create;

module.exports.solicitarTrocaModel = solicitarTrocaModel;

function _findByUserId(id_solicitante) {
  return this.DAO.findAll({where:{id_solicitante}});
}

function _create(data) {
  let
    that = this;
  return this.DAO.findOne({where:{id_jogo: data.id_jogo,id_dono: data.id_dono}})
  .then(function(persisted){
    if(persisted){
      return persisted.destroy();
    }else{
      return that.DAO.create(data);
    }
  });
  
}