const express = require("express");
const app = express();
const routes = require("./routes");

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log("Escuchando en el puerto ", PORT);
});
