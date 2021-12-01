const { PrismaClient } = require("@prisma/client");
const { generateToken } = require("../utils/token");
const prisma = new PrismaClient();

module.exports = {
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body.user;

      const currentUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (password != currentUser.password) {
        res.json({ success: false, message: "unauthorized" });
      }
      const tokenString = generateToken(currentUser.id);
      res.json({ success: true, token: tokenString });
    } catch (e) {
      next(e);
    }
  },
};
