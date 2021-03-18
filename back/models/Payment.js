const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Payment extends Model {}

Payment.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "payment" }
);

module.exports = Payment;
