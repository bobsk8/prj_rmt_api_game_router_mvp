'use strict';

const
  dao = require('../dao/index').jogoDao,
  dataModel = require('./dataModel'),
  igdb = require('igdb-api-node').default,
  client = igdb('857a221299b32535202902ecc0386656');

let
  jogoModel;

jogoModel = new dataModel(dao);

jogoModel.getGamesByApi     = _getGamesByApi;
jogoModel.getGamesById      = _getGamesById;
jogoModel.updateFoto        = _updateFoto;
jogoModel.findByUserId      = _findByUserId;
jogoModel.findDisponiveis   = _findDisponiveis;

module.exports.jogoModel = jogoModel;

function _getGamesByApi() {
  return client.games({
    filters: {
 //   'alternative_names.comment-eq': 'Brazilian title', //Irá retornar somente jogos com titulos em portugues
      'release_dates.date-gt': '2012-01-01',  //Retornar entre data especifica
      'release_dates.date-lt': '2017-10-01',   //Retornar entre data especifica
      'cover.url-gt': undefined //Irá retornar somente jogos com imagens
    },
    limit: 50,    
    offset: 1, // Index    
    order: 'date:desc'    
  }, [
      '*'
    ])
}

function _getGamesById() {
  return client.games({
    ids: [id],
    limit: 15, // Limit to 5 results
    offset: 1 // Index offset for results

  }, [
      'name',
      'summary',
      'cover',
      'url',
      'videos'
    ])
}

function _updateFoto(id,ext) {
  return this.DAO.findOne({where:{id}})
    .then(function(persisted){
      persisted.foto = 'jogo-' + id + ext;
      return persisted.save();
    });
}

function _findByUserId(id_dono) {
  return this.DAO.findAll({where:{id_dono}});
}

function _findDisponiveis(id_dono) {
  return this.DAO.findAll({
    where:{id_dono: {$ne:id_dono},disponivel:1}
  });
}