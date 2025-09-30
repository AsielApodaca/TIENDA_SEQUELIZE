'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductoVenta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductoVenta.belongsTo(models.Venta, { foreignKey: 'idventa' });
      ProductoVenta.belongsTo(models.Producto, { foreignKey: 'idproducto' }); 
    }
  }
  ProductoVenta.init({
    idventa: DataTypes.INTEGER,
    idproducto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    precioVenta: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'ProductoVenta',
  });
  return ProductoVenta;
};