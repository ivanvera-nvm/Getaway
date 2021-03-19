const transporter = require("../config/mailer");
const UserModel = require("../models/User");

const AuthController = (user) => {
  const data = transporter.sendMail(
    {
      from: '"Getaway" <getawatapi@testing.com>',
      to: user, 
      subject: "Confirmacion", 
      text: "La compra ha sido efectuada", 
      html: `<di><b>Gracias por comprar en Getaway.com!</b></div>`, 
    },
    
    (err, info) => {
      err ? console.log(err) : console.log(info);
    }
  );
};

module.exports = AuthController;
