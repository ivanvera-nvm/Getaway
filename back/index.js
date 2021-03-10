const express = require("express");
const app = express();
const routes = require("./routes");

/* const db = require("./config/index") */

const { db } = require("./models/index")

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// {force : true}
db.sync({force : true})
.then(() => {
  app.listen(
    PORT, () => {
      console.log("listening on port ", PORT);
    })
  
})
.catch(err => console.log(err))

