const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Review extends Model {}

Review.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "review" }
);

module.exports = Review;
