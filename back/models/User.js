const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");

class User extends Model {}

User.init(
  {
    access: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user"
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
      type: DataTypes.BIGINT,

    },
    adress: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports =  User 
