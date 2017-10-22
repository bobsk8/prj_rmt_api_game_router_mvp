'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const consoleModel = {
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
        type: DataTypes.BOOLEAN
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
        'console',
        consoleModel,
        {
            underscored: true
        }
    );
};
