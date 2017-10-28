'use strict';

const
  dao = require('../dao/index').solicitarTrocaDao,
  models = require('../dao/index'),
  dataModel = require('./dataModel');

let
  solicitarTrocaModel;

solicitarTrocaModel = new dataModel(dao);

solicitarTrocaModel.findByUserId          = _findByUserId;
solicitarTrocaModel.create                = _create;
solicitarTrocaModel.findByUserIdAprovadas = _findByUserIdAprovadas;

module.exports.solicitarTrocaModel = solicitarTrocaModel;

function _findByUserId(id_solicitante) {
  return this.DAO.findAll({
    where: {aceite: false},
    $or: [
      {id_solicitante, id_dono: id_solicitante}
    ],
    include: [
      { model: models.jogoDao, as: 'jogo' },
      { model: models.dadoCadastralDao, as: 'solicitante' },
      { model: models.dadoCadastralDao, as: 'dono' }
    ]
  });
}

function _findByUserIdAprovadas(id_solicitante) {
  return this.DAO.findAll({
    where: {aceite: true},
    $or: [
      {id_solicitante, id_dono: id_solicitante}
    ],
    include: [
      { model: models.jogoDao, as: 'jogo' },
      { model: models.dadoCadastralDao, as: 'solicitante' },
      { model: models.dadoCadastralDao, as: 'dono' }
    ]
  });
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