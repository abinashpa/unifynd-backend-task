const { PrismaClient } = require("@prisma/client");
require("dotenv").config({ path: "../config/example.env" });

async function seed() {
  prisma = new PrismaClient();

  // const user = await prisma.user.create({
  //   data: {
  //     name: "Jon Doe",
  //     email: "jon@example.com",
  //     password: "qwerty",
  //   },
  // });

  // const expense = await prisma.expense.createMany({
  //   data: [
  //     {
  //       name: "LG TV",
  //       price: 1000,
  //       tax: {
  //         create: {
  //           data: {
  //             central: 60,
  //             state: 60,
  //           },
  //         },
  //       },
  //     },
  //     {
  //       name: "Samsung Fridge",
  //       price: 1500,
  //       tax: {
  //         create: {
  //           data: {
  //             central: 90,
  //             state: 90,
  //           },
  //         },
  //       },
  //     },
  //   ],
  // });

  const items = await prisma.item.createMany({
    data: [
      {
        name: "books",
        tax: 0,
        state: 0,
        center: 0,
      },
      {
        name: "fruits",
        tax: 5.0,
        state: 2.5,
        center: 2.5,
      },
      {
        name: "processed food",
        tax: 12.0,
        state: 6.0,
        center: 6.0,
      },
      {
        name: "refrigerator",
        tax: 18.0,
        state: 6.0,
        center: 6.0,
      },
      {
        name: "car",
        tax: 28,
        state: 14,
        center: 14,
      },
    ],
  });
}

seed()
  .catch(console.error)
  .finally(() => {
    prisma.$disconnect();
  });
