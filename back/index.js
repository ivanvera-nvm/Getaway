const express = require("express");
const app = express();
const routes = require("./routes");
const db = require("./config/index")


const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// {force : true}
db.sync({force: false})
.then(() => {
  app.listen(
    PORT, () => {
      console.log("listening on port ", PORT);
    })
  
})
.catch(err => console.log(err))

/* 
db.sync()
  .then(() => {
    console.log("sincronizado con la base de datos");
    app.listen(3001, () => {
      console.log("server encendido en puerto 3001");
    });
  })
  .catch(console.error); */
