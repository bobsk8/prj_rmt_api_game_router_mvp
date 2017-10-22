'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const jogoModel = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING
    },
    desc: {
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
    },
    id_dono: {
        type: DataTypes.INTEGER
    },
    id_console: {
        type: DataTypes.INTEGER
    },
    id_genero: {
        type: DataTypes.INTEGER
    },
    dt_inc: {
        type: DataTypes.DATE
    },
    dt_exc: {
        type: DataTypes.DATE
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
