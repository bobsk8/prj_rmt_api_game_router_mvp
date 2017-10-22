'use strict';

const
  dao = require('../dao/index').dadoCadastralDao,
  crypto    = require('crypto'),
  dataModel = require('./dataModel');

let
  dadoCadastralModel;

dadoCadastralModel = new dataModel(dao);

dadoCadastralModel._login        = _login;
dadoCadastralModel.createUser    = _createUser;
dadoCadastralModel.updateFoto    = _updateFoto;

module.exports.dadoCadastralModel = dadoCadastralModel;

function _sha256(password){
  let hash = crypto.createHash('sha256', 'Projeto:Game');
  hash.update(password);
  return hash.digest('hex');
}

function _login(user){
  return this.DAO.findOne({
    where: {
      username: user.username,
      pass: _sha256(user.pass)
    }
  });
}

function _createUser(data) {  
  data.pass = _sha256(data.pass);
  return this.DAO.create(data);
}

function _updateFoto(id,ext) {
  return this.DAO.findOne({where:{id}})
    .then(function(persisted){
      persisted.foto = 'user-' + id + ext;
      return persisted.save();
    });
}