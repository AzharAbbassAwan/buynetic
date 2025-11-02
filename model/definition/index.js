const { Sequelize } = require("sequelize");
const { db } = require("../../common/databaseConnection");
var config = require("../../config.json");
const { User } = require("./user");
const DBInstance = {};
config = config.db;

const models = {
  User,
};

db.models = models;
db.sequelize = db;
db.Sequelize = Sequelize;
module.exports = { db, models };
