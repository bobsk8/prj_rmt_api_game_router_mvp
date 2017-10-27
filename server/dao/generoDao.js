'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const generoModel = {
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
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
};


//// Export //////
module.exports = (sequelize) => {
    return sequelize.define(
        'genero',
        generoModel,
        {
            underscored: true
        }
    );
};
