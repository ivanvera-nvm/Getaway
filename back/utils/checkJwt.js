const jwt = require("jsonwebtoken");
const User = require("../models/User");

const checkJWT = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]; // recibe del headers del axios
  if (!token) return res.status(401).json({ error: "no estas logeado" });
  try {
    const data = jwt.verify(token, "getaway");

    const user = await User.findOne({
      where: { email: data.email },
    });

    if (user) req.user = user;

    return next();
  } catch (err) {
    console.log(err);
  }
};

module.exports = checkJWT;
