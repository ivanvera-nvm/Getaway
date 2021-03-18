const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const CartModel = require("../models/Cart");

const UserController = {

  allUsers(req, res, next) {
    UserModel.findAll({ where: req.body, order: [["id", "ASC"]] })
      .then((users) => res.status(200).send(users))
      .catch(next);
  },

  findById(req, res, next) {
    const id = req.params.id;
    UserModel.findByPk(id)
      .then((user) => res.status(200).send(user))
      .catch(next);
  },

  createUser(req, res, next) {
    const {email} = req.body
    UserModel.findOne({where : {email}}).then(user=>{
      console.log(user)
      if(!user) {
        UserModel.create(req.body).then(user => {
          return res.status(200).send(user)
        })
      } else {
        return res.status(403).send('El email ya se encuentra registrado')
      }
    })
    .catch(err => next(err))

  },

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

  deleteUser(req, res, next) {
    const id = req.params.id;
    UserModel.destroy({ where: { id } })
      .then(() => {
        res.send("usuario eliminado exitosamente").status(200);
      })
      .catch(next);
  },

  loginUser(req, res, next) {
    const { email, password } = req.body;
    UserModel.findOne({
      where: { email },
    })
      .then((user) => {
        if (!user) return res.status(401).send("El usuario no existe");
        user.validPassword(password).then((hash) => {
          console.log(hash);
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

  logoutUser(req, res, next) {
    res.status(200).send('Usuario deslogeado con éxito')
  },

  checkAccess(req, res, next) {
    const id = req.params.id;
    const { access } = req.body;
    UserModel.findByPk(id)
      .then((users) => {
        return users.update({ access }, { returning: true });
      })
      .then((users) => {
        res.status(201).json(users);
      });
  },
};

module.exports = UserController;
