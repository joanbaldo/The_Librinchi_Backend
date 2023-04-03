'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    rol: DataTypes.STRING,
    dni: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    adress: DataTypes.STRING,
    country: DataTypes.STRING,
    tel: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};