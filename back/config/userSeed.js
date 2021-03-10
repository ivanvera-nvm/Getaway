const { User } = require("../models/User");

User.bulkCreate([
  {
    type: "admin",
    name: "Mariano",
    lastName: "doe",
    email: "mariano@gmail.com",
    password: "johnd",
    phone: 15702367033,
    adress: "kilcoole",
  },
  {
    type: "user",
    name:  "david",
    lastName: "guetta",
    email: "david@gmail.com",
    password: "onelove",
    phone: 15702367033,
    adress: "almagro",
  },
  {
    type: "user",
    name: "ringo",
    lastName: "star",
    email: "ringo@gmail.com",
    password: "beatles123$",
    phone: 15702367033,
    adress: "belgrano",
  },
  {
    type: "user",
    name: "jim",
    lastName: "morrison",
    email: "jim@gmail.com",
    password: "thedo8rs",
    phone: 15702367033,
    adress: "colegiales",
  },
  {
    type: "user",
    name: "alberto",
    lastName: "fernandez",
    email: "alberto@gmail.com",
    password: "casarosada",
    phone: 15702367033,
    adress: "palermo",
  },
  {
    type: "user",
    name: "andrea",
    lastName: "muriete",
    email: "andrea@gmail.com",
    password: "teacher123",
    phone: 703315702388,
    adress: "nuñez",
  },
  {
    type: "user",
    name: "mariela",
    lastName: "avila",
    email: "mariela@gmail.com",
    password: "bioquimica",
    phone: 36703315702,
    adress: "recoleta",
  },

  {
    type: "user",
    name: "viviana",
    lastName: "valdivyeso",
    email: "viviana@gmail.com",
    password: "anotherteacher",
    phone: 765432109,
    adress: "martinez",
  },
  {
    type: "admin",
    name: "giselle",
    lastName: "samana",
    email: "giselle@gmail.com",
    password: "beauty$",
    phone: 876543210,
    adress: "san isidro",
  },
  {
    type: "user",
    name: "camila",
    lastName: "dayup",
    email: "camila@gmail.com",
    password: "sisterhood",
    phone: 987654321,
    adress: "pilar",
  },
]).then((userCreated) => {
  console.log("usuario fake aquí", userCreated);
});


