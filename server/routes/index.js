'use strict';

const
    consoleRouter = require('./console'),
    dadoCadastralRouter = require('./dado-cadastral'),
    generoRouter = require('./genero'),
    jogoRouter = require('./jogo'),
    solicitarTrocaRouter = require('./solicitar-troca'),
    trocaRouter = require('./troca'),
    interesseRouter = require('./interesse'),
    uploadRouter = require('./upload');


function routerAdapter(app) {
    consoleRouter(app);
    dadoCadastralRouter(app);
    generoRouter(app);
    jogoRouter(app);    
    solicitarTrocaRouter(app);
    trocaRouter(app);
    interesseRouter(app);
    uploadRouter(app);
}

module.exports = routerAdapter;
