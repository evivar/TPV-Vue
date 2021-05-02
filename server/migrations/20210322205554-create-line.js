'use strict';
module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('Lines', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER
      },
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
        allowNull: false
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE
      }
    });
  },
  down: async (queryInterface, DataType) => {
    await queryInterface.dropTable('Lines');
  }
};