const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: "../config/example.env" });

async function seed() {
  prisma = new PrismaClient();
  const items = await prisma.item.update({
    data: [
      {
        name: "processed food",
        tax: 12.0,
        state: 6.0,
        center: 6.0,
      },
      {
        name: "refrigerator",
        tax: 12.0,
        state: 6.0,
        center: 6.0,
      },
    ],
  });
  const user = await prisma.user.create({
    data: {
      name: "Jon Doe",
      email: "jon@example.com",
      password: "qwerty",

      expenses: {
        createMany: {
          data: [
            {
              name: "LG TV",
              price: 1000,
              // tax: {
              //   create: {
              //     data: {
              //       central: 60,
              //       state: 60,
              //     },
              //   },
              // },
            },
            {
              name: "Samsung Fridge",
              price: 1500,
              // tax: {
              //   create: {
              //     data: {
              //       central: 90,
              //       state: 90,
              //     },
              //   },
              // },
            },
          ],
        },
      },
    },
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
