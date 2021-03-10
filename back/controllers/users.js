const UserModel = require("../models/User");

const UserController = {
  allUsers(req, res, next) {
    UserModel.findAll(req.body)
      .then((users) => res.status(200).send(users))
      .catch(next);
  },

  findById(req, res, next) {
    const id = req.params.id;
    UserModel.findByPk(id)
      .then((user) => res.status(200).send(user))
      .catch(next);
  },

  updateUser(req, res, next) {
    const id = req.params.id;
    UserModel.findByPk(id)
    
  },

  createUser(req, res, next) {
    UserModel.create(req.body)
      .then((user) => res.status(201).send(user))
      .catch(next);
  },
};

/*  findById(req, res) {
    let id = req.params.id
    UserModel.findById({_id: id})
    .populate({
      path: 'ataques',
       match: { tipo: "Type" }, 
      options: { limit: 4 }
    })
     .populate("tipo") 
    .then(users =>{ res.send(users)
    console.log(users)}          )
    .catch(() => res.sendStatus(404))
    
  },
  create(req,res){
   let pokemonCreate = req.body
    UserModel.create(pokemonCreate)
    .then(users =>res.status(201).send(users) )
    .catch(() => res.sendStatus(404))
    

  },
  update(req,res){
    let userId = req.params.id
    let userBody = req.body
     UserModel.findByIdAndUpdate(userId, userBody)
     .then(user => res.status(200).send(user))
    .catch(() => res.sendStatus(404))
     
 
   },
   deleteOne(req,res){
    let userId= req.params.id
     UserModel.deleteOne({_id: userd})
     .then(user => res.send(user))
     .catch(() => res.sendStatus(404))
     
 
   },
 */

module.exports = UserController;
