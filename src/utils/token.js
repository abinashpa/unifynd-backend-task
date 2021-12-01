const jwt = require("jsonwebtoken");

function generateToken(uid) {
  const token = jwt.sign({ uid: uid, exp: 10e3 }, process.env.JWT_SECRET);

  return token;
}

function decodeToken(tokenString) {
  const data = jwt.verify(tokenString, process.env.JWT_SECRET);
  return data.uid;
}

module.exports = { generateToken, decodeToken };
