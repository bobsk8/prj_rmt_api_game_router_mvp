'use strict';

let
  model = require('../../model/dadoCadastralModel').dadoCadastralModel;

module.exports = (req, res) => {
  let
    user = { login: false };

  if (!req.session.user) {
    res.send(user);
    return;
  }

  model.findById(req.session.user.id).then(userData => {
    if (userData) {
      user = setUser(userData);
    }
    res.send(user);
  }, err => {
    console.log(err);
    res.send({ login: false });
  });
};

function setUser(data) {
  let
    user = {};

  user.id         = data.dataValues.id;
  user.nome       = data.dataValues.nome;
  user.username   = data.dataValues.username;
  user.dt_nasc    = data.dataValues.dt_nasc;
  user.sexo       = data.dataValues.sexo;
  user.estado     = data.dataValues.estado;
  user.cidade     = data.dataValues.cidade;
  user.foto       = data.dataValues.foto;
  user.login = true;
  return user;
};
