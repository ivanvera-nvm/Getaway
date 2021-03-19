const express = require("express");
const app = express();
const routes = require("./routes");
var cors = require("cors");

const { db } = require("./models/index");
const { truncate } = require("./models/Product");

const PORT = 3080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", routes);

app.use((err, req, res, next) => {
  if (err) res.status(500).send("Internal Server Error");
});

db.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log("listening on port ", PORT);
    });
  })
  .catch((err) => console.log(err));
