const nodemailer = require("nodemailer");


 transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "veraivandamian@gmail.com", // generated ethereal user
    pass: "mkgmxegeavwrvw", // generated ethereal password
  },
});

transporter.verify(() => {
  console.log("Activado para envio de emails");
});

module.exports = transporter;