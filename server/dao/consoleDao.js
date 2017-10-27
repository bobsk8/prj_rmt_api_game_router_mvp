'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const consoleModel = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    descricao: {
        type: DataTypes.STRING
    },
    habilitar: {
        type: DataTypes.BOOLEAN
    }
};


//// Export //////
module.exports = (sequelize) => {
    return sequelize.define(
        'console',
        consoleModel,
        {
            underscored: true
        }
    );
};
