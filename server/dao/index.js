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

    //Genero tem muitos jogos
    generoDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_genero'
    });

    //Jogo tem um genero
    jogoDao.belongsTo(generoDao, {
        as: 'genero',
        foreignKey: 'id_genero',
        targetKey: 'id'
    });

    //Console tem muitos jogos
    consoleDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_console',
        sourceKey: 'id'
    });

    //Jogo tem um console
    jogoDao.belongsTo(consoleDao, {
        as: 'console',
        foreignKey: 'id_console',
        targetKey: 'id'
    });

    //Jogo tem muitos interessados
    jogoDao.hasMany(interesseDao, {
        as: 'interesses',
        foreignKey: 'id_jogo'
    });

    //Solicitacao tem um jogo
    solicitarTrocaDao.belongsTo(jogoDao, {
        as: 'jogo',
        foreignKey: 'id_jogo',
        targetKey: 'id'
    });

    //Jogo tem muitas solicitações
    jogoDao.hasMany(solicitarTrocaDao, {
        as: 'solicitacoes',
        foreignKey: 'id_jogo',
        sourceKey: 'id'
    });

    //DadoCadastral tem muitas solicitacoes
    dadoCadastralDao.hasMany(solicitarTrocaDao, {
        as: 'solicitacoes',
        foreignKey: 'id_dono',
        sourceKey: 'id'
    });

    //Solcitação tem um DadoCadastral
    solicitarTrocaDao.belongsTo(dadoCadastralDao, {
        as: 'dono',
        foreignKey: 'id_dono',
        targetKey: 'id'
    });

    //DadoCadastral tem muitas solicitacoes
    dadoCadastralDao.hasMany(solicitarTrocaDao, {
        as: 'solicitacoes',
        foreignKey: 'id_solicitante',
        sourceKey: 'id'
    });

    //Solcitação tem um DadoCadastral
    solicitarTrocaDao.belongsTo(dadoCadastralDao, {
        as: 'solicitante',
        foreignKey: 'id_solicitante',
        targetKey: 'id'
    });

    //DadoCadastral tem muitos jogos 
    dadoCadastralDao.hasMany(jogoDao, {
        as: 'jogos',
        foreignKey: 'id_dono'
    });
    
    //Jogo tem um DadoCadastral
    jogoDao.belongsTo(dadoCadastralDao, {
        as: 'dono',
        foreignKey: 'id_dono',
        targetKey: 'id'
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