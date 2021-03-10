const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class Review extends Model {}

Review.init(
  {
  
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
