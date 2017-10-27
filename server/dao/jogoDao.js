'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const jogoModel = {
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
    foto: {
        type: DataTypes.STRING
    },
    habilitar: {
        type: DataTypes.BOOLEAN
    },
    disponivel: {
        type: DataTypes.BOOLEAN
    }
};


//// Export //////
module.exports = (sequelize) => {
    return sequelize.define(
        'jogo',
        jogoModel,
        {
            underscored: true
        }
    );
};
