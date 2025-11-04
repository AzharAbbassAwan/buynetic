const { db } = require("../model/definition");
const currencySeeder = require("./currency/currencySeeder");
async function seed() {
  try {
    await db.sequelize.transaction(async (transaction) => {
      await Promise.all([currencySeeder.seed(transaction)]);
      console.log("Database seeded successfully");
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}
seed();
