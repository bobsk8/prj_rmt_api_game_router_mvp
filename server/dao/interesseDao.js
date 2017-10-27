'use strict';

const
  DataTypes = require('sequelize').DataTypes;

const interesseModel = {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  dt_interesse: {
      type: DataTypes.DATE
  }
};


//// Export //////
module.exports = (sequelize) => {
  return sequelize.define(
    'interesse',
    interesseModel,
    { underscored: true }
  );
};
