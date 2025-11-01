const { logger } = require("sequelize/lib/utils/logger");
const config = require("../config.json");
const { Sequelize } = require("sequelize");

// Create a Sequelize instance for tenant database with connection pool settings
const db = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    pool: config.db.pool,
    logging: false,
  }
);

// Test the tenant database connection
db.authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the Tenant Database:", err);
  });

module.exports = { db };
