const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: "../config/example.env" });

async function seed() {
  prisma = new PrismaClient();
  await prisma.user.create({
    data: {
      name: "Jon Doe",
      email: "jon@example.com",
      password: "qwerty",
    },
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
