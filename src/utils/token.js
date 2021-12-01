const jwt = require("jsonwebtoken");

async function generateToken(uid) {
  const token = await jwt.sign(
    { uid: uid, exp: 10e3 },
    process.env.JWT_SECRET,
    {
      algorithm: "RS256",
    }
  );

  return token;
}

function decodeToken(tokenString) {
  const data = await jwt.verify(tokenString, process.env.JWT_SECRET);
  return data.uid;
}

module.exports = { generateToken, decodeToken };
