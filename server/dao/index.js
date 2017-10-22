'use strict';

function server(config) {
    const
        Sequelize = require('sequelize'),
        sequelize = new Sequelize(
            config.dbAccess.DATABASE,
            config.dbAccess.MYSQL_USER,
            config.dbAccess.PASSWORD,
            config.dbHost
        ),
        consoleDao          = sequelize.import('./consoleDao'),
        dadoCadastralDao    = sequelize.import('./dadoCadastralDao'),
        generoDao           = sequelize.import('./generoDao'),
        jogoDao             = sequelize.import('./jogoDao'),
        interesseDao        = sequelize.import('./interesseDao'),
        solicitarTrocaDao   = sequelize.import('./solicitarTrocaDao'),
        trocaDao            = sequelize.import('./trocaDao');

    //Relations   

    sequelize
        .authenticate()
        .then((err) => {
            console.log('Conected to DB');
        })
        .catch((err) => {
            console.log(`DB Conection failed: ${err}`);
        });

    module.exports = {
        sequelize,
        consoleDao,
        dadoCadastralDao,
        generoDao,
        jogoDao,
        interesseDao,
        solicitarTrocaDao,
        trocaDao
    };

    return {
        sequelize,
        consoleDao,
        dadoCadastralDao,
        generoDao,
        jogoDao,
        interesseDao,
        solicitarTrocaDao,
        trocaDao
    };
}

module.exports = server;