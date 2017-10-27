'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const solicitarTrocaModel = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    trocado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    dt_solicitacao: {
        type: DataTypes.DATE
    }
};


//// Export //////
module.exports = (sequelize) => {
    return sequelize.define(
        'solicitar_troca',
        solicitarTrocaModel,
        {
            underscored: true
        }
    );
};
