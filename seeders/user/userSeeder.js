const { models } = require("../../model/definition");
let { users } = require("./userData");
const bcrypt = require("bcrypt");

module.exports = {
  seed: async function (transaction) {
    try {
      const preparedUsers = await Promise.all(
        users.map(async (user) => {
          const password_hash = await bcrypt.hash(user.password, 10);
          const { password, ...rest } = user;
          return { ...rest, password_hash };
        })
      );

      await models.User.bulkCreate(preparedUsers, {
        transaction,
        validate: true,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};
