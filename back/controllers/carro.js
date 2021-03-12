const { Cart } = require("../models");
const Order = require("../models/Order");


const addCartItem = (req,res) => {
  const {body} = req  // nos llega productId y OrderId

  if(newCart.status){

  }
//   Order.create(body).then((data) => res.status(201).json(data));
};

const deleteCartItem = (req,res) => {
    const {id} = req.params;
    Order.destroy({where:{id}}).then(()=> res.sendStatus(200))
};


const bringCart = (req,res) => {

};

module.exports = { addCartItem, deleteCartItem, bringCart };


/* 
1. Si el cart esta pending --> 
            Se chequea si ese prod ya esta añadido --> Si no lo esta ---> Crear una Orden .  
                                                  --> Si lo esta --> Buscar la Orden por id, aumentamos la quantity del product.

2. Si el cart esta fulfilled --> 
            Se vacia el Cart y vuelve a pending. 
*/ 