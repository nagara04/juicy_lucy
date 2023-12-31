"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User, { foreignKey: "UserId" });

      Transaction.belongsTo(models.Order, { foreignKey: "OrderId" });
    }
  }
  Transaction.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "UserId cannot be empty",
          },
          notEmpty: {
            msg: "UserId cannot be empty",
          },
        },
      },
      OrderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "OrderId cannot be empty",
          },
          notEmpty: {
            msg: "OrderId cannot be empty",
          },
        },
      },
      amount: DataTypes.INTEGER,
      isPaid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );
  return Transaction;
};
