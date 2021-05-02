'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Line extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Invoice}) {
      // define association here
      this.belongsTo(Invoice, {foreignKey: 'invoiceId'})
    }
  };
  Line.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cost: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    discount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0.0
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'lines',
    modelName: 'Line',
  });
  return Line;
};