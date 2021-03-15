const jwt = require ('jsonwebtoken');

const checkJWT = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log('TOKEEEEE', token);

    const data = jwt.verify(token, "getaway");

    if (data) {
        req.email = data;
        return next();
    }

    return res.status(401).send("You are not allowed")
}

module.exports = checkJWT;