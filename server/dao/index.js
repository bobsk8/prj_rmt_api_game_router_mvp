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
        consoleDao = sequelize.import('./consoleDao'),
        dadoCadastralDao = sequelize.import('./dadoCadastralDao'),
        generoDao = sequelize.import('./generoDao'),
        jogoDao = sequelize.import('./jogoDao'),
        interesseDao = sequelize.import('./interesseDao'),
        solicitarTrocaDao = sequelize.import('./solicitarTrocaDao'),
        trocaDao = sequelize.import('./trocaDao');

    //Relations   

    dadoCadastralDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_dono'
    });
    generoDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_genero'
    });
    consoleDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_console'
    });
    dadoCadastralDao.hasMany(solicitarTrocaDao, {
        as: 'solicitacoes',
        foreignKey: 'id_dono'
    });
    dadoCadastralDao.hasMany(solicitarTrocaDao, {
        as: 'solicitacoes',
        foreignKey: 'id_solicitante'
    });
    jogoDao.hasMany(interesseDao, {
        as: 'interesses',
        foreignKey: 'id_jogo'
    });

    solicitarTrocaDao.belongsTo(jogoDao, {
        as: 'jogo',
        foreignKey: 'id_jogo'
    });

    trocaDao.belongsTo(solicitarTrocaDao, {
        as: 'solicitacao',
        foreignKey: 'id_solicitacao'
    });    

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