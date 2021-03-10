const { Category } = require("../models/Category");

Category.bulkCreate([
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
]).then((categoryCreated) => {
  console.log("categorías creadas", categoryCreated);
});
