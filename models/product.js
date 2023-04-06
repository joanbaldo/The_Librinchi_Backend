'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Category);
      Product.belongsToMany(models.Order,{
        through:models.ProductOrder})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    brand: DataTypes.STRING,
    madein: DataTypes.STRING,
    ean: DataTypes.STRING,
    price: DataTypes.FLOAT,
    weight: DataTypes.FLOAT,
    volume: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};