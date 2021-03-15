const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const CartModel = require("../models/Cart");

const   UserController = {
  //ver todos los usuarios desde /admin
  allUsers(req, res, next) {
    UserModel.findAll(req.body)
      .then((users) => res.status(200).send(users))
      .catch(next);
  },
  //ver un usuario por id desde /admin
  findById(req, res, next) {
    const id = req.params.id;
    UserModel.findByPk(id)
      .then((user) => res.status(200).send(user))
      .catch(next);
  },
  //registrarse desde /users/register
  createUser(req, res, next) {
    UserModel.create(req.body)
      .then((user) => res.status(201).send(user))
      .catch(next);
  },
  //editar la data de un usuario desde /users/:id
  updateUser(req, res, next) {
    const id = req.params.id;
    UserModel.update(req.body, {
      where: {
        id: id,
      },
    })
      .then((user) => res.status(201).send(user))
      .catch(next);
  },
  //eliminar un usuario desde /admin
  deleteUser(req, res, next) {
    const id = req.params.id;
    UserModel.destroy({ where: { id } })
      .then(() => res.send("usuario eliminado exitosamente").status(200))
      .catch(next);
  },

  loginUser(req, res, next) {
    const { email, password } = req.body;
    UserModel.findOne({
      where: { email },
    })
      .then((user) => {
        //console.log(user.validPassword(password))
        if (!user) return res.status(401).send("El usuario no existe");
        user.validPassword(password).then((hash) => {
          if (user.password !== hash)
            return res.status(401).send("Pass incorrecto");
          else {
            const token = jwt.sign(
              { email, exp: Math.floor(Date.now() / 1000) + 60 * 60 },
              "getaway"
            );
            return res.status(200).json({ token, user });
          }
        });
      })
      .catch((e) => res.status(401).send("Error en autenticación"));
  },

  findOrCreateCart(req, res, next) {
    const { userId, cartId } = req.body;

    CartModel.findOne({ where: { userId } }).then((cart) => {
      if (!cart) {
        CartModel.create({ userId }).then((cart) => {
          return res.status(200).send(cart);
        });
      }
    });
  },

  //editar otros usuarios para promoverlos a administradores
  //si busco por pk updeteo de a uno, si busco por findAll la variable id pasa a ser ids y me retorna un arreglo de ids

  checkAccess(req, res, next) {
    const id = req.params.id;
    const access = req.params.access;
    console.log(access);
    UserModel.findByPk(id)
      .then((users) => {
        return users.update(req.body, { access: "admin" });
      })
      .then("user updated to admin successfully")
      .status(201);
  },
};

module.exports = UserController;
