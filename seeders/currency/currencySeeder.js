const { models } = require("../../model/definition");
const { currencies } = require("./currencyData");

module.exports = {
  seed: async function (transaction) {
    try {
      Promise.all([
        models.Currency.bulkCreate(currencies, {
          transaction,
          updateOnDuplicate: ["code"],
        }),
      ]);
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
