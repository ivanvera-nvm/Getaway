const transporter = require("../config/mailer");
const UserModel = require("../models/User");

const AuthController = (user) => {

  const data = transporter.sendMail(
    {
      from: '"Fred Foo 👻" <getawatapi@testing.com>', // sender address
      to: user, // list of receivers
      subject: "Confirmacion", // Subject line
      text: "La compra ha sido efectuada", // plain text body
      html: "<b>CORREO DE VERIFICACION</b>", // html body
    },
    (err, info) => {
      err ? console.log(err) : console.log(info);
    }
  );
};

module.exports = AuthController;
