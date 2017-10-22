'use strict';

const
    DataTypes = require('sequelize').DataTypes;

const dadoCadastralModel = {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    dt_nasc: {
        type: DataTypes.DATE
    },
    sexo: {
        type: DataTypes.ENUM('M', 'F')
    },
    estado: {
        type: DataTypes.ENUM('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
            'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO')
    },
    cidade: {
        type: DataTypes.STRING
    },
    apelido: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.STRING
    },
    habilitar: {
        type: DataTypes.BOOLEAN
    },
    email: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING
    },
    pass: {
        type: DataTypes.STRING
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
        'dado_cadastral',
        dadoCadastralModel,
        {
            underscored: true
        }
    );
};