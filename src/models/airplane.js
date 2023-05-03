'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    id: {
      type:DataTypes.NUMBER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
    },
    modelNumber: DataTypes.STRING,
    capacity:{ 
      type:DataTypes.NUMBER,
      defaultValue:0
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};