const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = {
  list: async (req, res, next) => {
    try {
      const currentUser = await prisma.user.findUnique({
        where: {
          id: req.uid,
        },
        include: {
          expenses: {
            include: {
              tax: true,
            },
          },
        },
      });
      res.json({ success: true, expenses: currentUser.expenses });
    } catch (err) {
      next(err);
    }
  },
  add: async (req, res, next) => {
    try {
      const { name, price, type } = req.body.expense;
      const expense = await prisma.expense.create({
        data: {
          userId: req.uid,
          name: name,
          price: price,
          tax: {
            create: {
              central: price * (9 / 100),
              state: price * (9 / 100),
            },
          },
        },
        include: {
          tax: true,
        },
      });
      res.json({ success: true, expenses: expense });
    } catch (err) {
      next(err);
      console.log(err);
    }
  },
};
