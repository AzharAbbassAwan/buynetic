const { Sequelize } = require("sequelize");
const { db } = require("../../common/databaseConnection");
var config = require("../../config.json");
const DBInstance = {};
config = config.db;

const models = {};

db.models = models;
db.sequelize = db;
db.Sequelize = Sequelize;
module.exports = { db, models };
