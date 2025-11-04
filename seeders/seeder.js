const { db } = require("../model/definition");
const currencySeeder = require("./currency/currencySeeder");
const userSeeder = require("./user/userSeeder");

async function seed() {
  try {
    await db.sequelize.transaction(async (transaction) => {
      await Promise.all([
        currencySeeder.seed(transaction),
        userSeeder.seed(transaction),
      ]);
      console.log("Database seeded successfully");
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
seed();
