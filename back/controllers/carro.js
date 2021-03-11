const Order = require("../models/Order");


const addCartItem = (req,res) => {
  const {body} = req
  Order.create(body).then((data) => res.status(201).json(data));
};

const deleteCartItem = (req,res) => {
    const {id} = req.params;
    Order.destroy({where:{id}}).then(()=> res.sendStatus(200))
};


const bringCart = (req,res) => {

};

module.exports = { addCartItem, deleteCartItem, bringCart };
