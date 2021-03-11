const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Order extends Model {}

Order.init(
  {
   total: {
     type: DataTypes.INTEGER
   }
  },
  { sequelize: db, modelName: "order" }
);



module.exports = Order