'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const generoModel = {
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
    habilitar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
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
        'genero',
        generoModel,
        {
            underscored: true
        }
    );
};
