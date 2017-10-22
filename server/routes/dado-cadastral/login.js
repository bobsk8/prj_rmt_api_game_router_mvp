'use strict';

let
    model = require('../../model/dadoCadastralModel').dadoCadastralModel;

module.exports = (req, res) => {
    let
        user = req.body,
        userR = {};

    model._login(user).then((data) => {

        if (data) {
            userR = setUser(data)
            req.session.user = userR;
            res.send(userR);
        }else{
            res.send({ login: false });
        }
    }).catch((err) => {
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
