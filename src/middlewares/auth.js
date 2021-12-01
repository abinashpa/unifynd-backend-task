const { decodeToken } = require("../utils/token");

const isAuth = (req, res, next) => {
  const tokenString = req.header("Authorization");
  if (!tokenString) {
    res.json({ success: false, message: "token not found" });
  } else {
    const uid = decodeToken(tokenString);
    req.uid = uid;
    next();
  }
};

module.exports = isAuth;
