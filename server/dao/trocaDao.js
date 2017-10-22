'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const trocaModel = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    id_solicitacao: {
        type: DataTypes.INTEGER
    },
    chave_dono: {
        type: DataTypes.INTEGER
    },
    chave_solicitante: {
        type: DataTypes.INTEGER
    },
    dt_troca: {
        type: DataTypes.DATE
    }
};


//// Export //////
module.exports = (sequelize) => {
    return sequelize.define(
        'troca',
        trocaModel,
        {
            underscored: true
        }
    );
};
