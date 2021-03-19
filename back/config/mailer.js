const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config({path:'/home/ivan/Documents/plataforma5/Bootcamp/Getaway/back/.env'})

 transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'getawayexperience@gmail.com',
    pass: 'plataforma5'
  },
});

transporter.verify(() => {
  console.log("Activado para envio de emails");
});

module.exports = transporter;