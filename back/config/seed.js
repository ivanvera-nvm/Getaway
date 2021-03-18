const db = require("./index");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const ProductCategory = require("../models/ProductCategory");

const userParaSeedear = [
  {
    access: "admin",
    name: "admin",
    lastName: "admin",
    email: "admin@gmail.com",
    password: "$2b$16$bnDQD4YnuqCV0DgQ7rDQgOfHfmxSUlmaI8RLD2KOnZ6F/IrgD8ApS",
    phone: "1130922002",
    address: "Cespedes 1567",
    salt: "$2b$16$bnDQD4YnuqCV0DgQ7rDQgO",
  },
  {
    access: "user",
    name: "david",
    lastName: "guetta",
    email: "david@gmail.com",
    password: "onelove",
    phone: 15702367033,
    address: "almagro",
  },
  {
    access: "user",
    name: "ringo",
    lastName: "star",
    email: "ringo@gmail.com",
    password: "beatles123$",
    phone: 15702367033,
    address: "belgrano",
  },
  {
    access: "user",
    name: "jim",
    lastName: "morrison",
    email: "jim@gmail.com",
    password: "thedo8rs",
    phone: 15702367033,
    address: "colegiales",
  },
  {
    access: "user",
    name: "alberto",
    lastName: "fernandez",
    email: "alberto@gmail.com",
    password: "casarosada",
    phone: 15702367033,
    address: "palermo",
  },
  {
    access: "user",
    name: "andrea",
    lastName: "muriete",
    email: "andrea@gmail.com",
    password: "teacher123",
    phone: 703315702388,
    address: "nuñez",
  },
  {
    access: "user",
    name: "mariela",
    lastName: "avila",
    email: "mariela@gmail.com",
    password: "bioquimica",
    phone: 36703315702,
    address: "recoleta",
  },

  {
    access: "user",
    name: "viviana",
    lastName: "valdivyeso",
    email: "viviana@gmail.com",
    password: "anotherteacher",
    phone: 765432109,
    address: "martinez",
  },
  {
    access: "admin",
    name: "giselle",
    lastName: "samana",
    email: "giselle@gmail.com",
    password: "beauty$",
    phone: 876543210,
    address: "san isidro",
  },
  {
    access: "user",
    name: "camila",
    lastName: "dayup",
    email: "camila@gmail.com",
    password: "sisterhood",
    phone: 987654321,
    address: "pilar",
  },
];

const categoriasParaSeedear = [
  {
    name: "Gastronomía",
  },
  {
    name: "Escapadas",
  },
  {
    name: "Sommeliers & blends",
  },
  {
    name: "Aventura",
  },
  {
    name: "Omm and relax",
  },
  {
    name: "Beauty time",
  },
  {
    name: "Show time",
  },
  {
    name: "Deportes",
  },
  {
    name: "City tours",
  },
  {
    name: "Recitales",
  },
];

const productosPorCategoriaParaSeedear = [
  {
    categoryId: "1",
    productId: "1"
  },
  {
    categoryId: 2,
    productId: 1,
  },
  {
    categoryId: 8,
    productId: 2,
  },
  {
    categoryId: 4,
    productId: 2,
  },
  {
    categoryId: 8,
    productId: 3,
  },
  {
    categoryId: 4,
    productId: 3,
  },
  {
    categoryId: 5,
    productId: 4,
  },
  {
    categoryId: 6,
    productId: 4,
  },
  {
    categoryId: 5,
    productId: 5,
  },

  {
    categoryId: 6,
    productId: 5,
  },
  {
    categoryId: 1,
    productId: 6,
  },
  {
    categoryId: 3,
    productId: 6,
  },
  {
    categoryId: 9,
    productId: 6,
  },
  {
    categoryId: 1,
    productId: 7,
  },
  {
    categoryId: 3,
    productId: 7,
  },
  {
    categoryId: 2,
    productId: 8,
  },
  {
    categoryId: 5,
    productId: 8,
  },
  {
    categoryId: 4,
    productId: 8,
  },
  {
    categoryId: 8,
    productId: 9,
  },
  {
    categoryId: 4,
    productId: 9,
  },
  {
    categoryId: 2,
    productId: 9,
  },
];

const productosParaSeedear = [
  {
    name: "Día de Campo para 2 personas",
    price: 15000,
    stock: 12,
    description:
      "Disfrute de un tranquilo día con su pareja en los alrededores de la ciudad, con almuerzo y cena incluidos.",
    expiry: "2021-05-22 19:10:25-07",
    image:
      "https://images.unsplash.com/photo-1599318724872-8bfb0ee3abea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1105&q=80",
  },
  {
    name: "Salto en paracaídas",
    price: 35000,
    stock: 3,
    description: "Para los mas valientes, un verdadero salto de adrenalina",
    expiry: "2021-04-22 14:10:25-07",
    image:
      "https://images.unsplash.com/photo-1496429862132-5ab36b6ae330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
  {
    name: "Clase de kitesurf",
    price: 12000,
    stock: 98,
    description:
      "Aprovecha la experiencia de uno de nuestros más experimentados profesores para aventurarte en este excitante deporte",
    expiry: "2022-04-22 13:10:25-07",
    image:
      "https://images.unsplash.com/photo-1580078959289-12fdfdfbb1df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=935&q=80",
  },
  {
    name: "Home Spa",
    price: 200,
    stock: 105,
    description: "Anímese a recrear un spa en la comodidad de su casa",
    expiry: "2022-02-21 05:10:25-07",
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Clase de automaquillaje",
    price: 2500,
    stock: 25,
    description:
      "Toma una clase de automaquillaje en uno de los mejores centros de estéticas",
    expiry: "2021-07-01 21:10:25-07",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1065&q=80",
  },
  {
    name: "Tour de birras",
    price: 2300,
    stock: 98,
    description: "Ocasión especial para una noche inolvidable",
    expiry: "2021-05-14 19:09:25-07",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Bar at Home",
    price: 500,
    stock: 150,
    description:
      "Para los que no quieren salir de su casa, recrea el ambiente de un bar porteño armando los drinks mas sofisticados",
    expiry: "2021-08-12 05:10:25-07",
    image:
      "https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    name: "Escapada de 2 Noches",
    price: 40000,
    stock: 25,
    description:
      "Sea la selva, la montaña, la playa o un glaciar, tómese ese descanso que tanto necesita",
    expiry: "2021-12-01 02:10:25-07",
    image:
      "https://images.unsplash.com/photo-1465917566611-efba2904dd8a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80",
  },
  {
    name: "Paseo en velero",
    price: 5000,
    stock: 13,
    description:
      "Disfrutá de un paseo en velero sobre la costa de Buenos Aires y disfrutá de la atmósfera que esta actividad te regala",
    expiry: "2022-04-22 19:10:25-07",
    image:
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
];



const seed = () => {
  return User.bulkCreate(userParaSeedear)
    .then(() => Category.bulkCreate(categoriasParaSeedear))
    .then(() => Product.bulkCreate(productosParaSeedear))
    .then(() => ProductCategory.bulkCreate(productosPorCategoriaParaSeedear));
};

seed().then(() => {
  process.exit();
});
