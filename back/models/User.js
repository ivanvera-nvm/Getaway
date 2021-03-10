const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class User extends Model {}

User.init(
  {
    type: {
      type: DataTypes.ENUM("user", "admin")
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,

    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports =  User 
