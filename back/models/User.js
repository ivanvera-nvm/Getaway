const { Model, DataTypes } = require("sequelize");
const db = require("../config/index");
const bcrypt = require("bcrypt");

class User extends Model {}

User.init(
  {
    access: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: { isEmail: true },
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
    },
    address: {
      type: DataTypes.STRING,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return bcrypt.hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

User.prototype.validPassword = function (loginPassword) {
  const salt = this.salt;
  return bcrypt.hash(loginPassword, this.salt);
};

module.exports = User;
