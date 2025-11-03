const { Sequelize } = require("sequelize");
const { db } = require("../../common/databaseConnection");
var config = require("../../config.json");
const { User } = require("./user");
const { UserOtp } = require("./userOtp");
const { Order } = require("./order");
const { Category } = require("./category");
const { Product } = require("./product");
const { OrderItem } = require("./orderItem");
const { Currency } = require("./currency");
const DBInstance = {};
config = config.db;

//User and UserOtp
User.hasMany(UserOtp, { foreignKey: "user_id" });
UserOtp.belongsTo(User, { foreignKey: "user_id" });

//User and Order
User.hasMany(Order, { foreignKey: "user_id" });
Order.belongsTo(User, { foreignKey: "user_id" });

//Product and category
Category.hasMany(Product, { foreignKey: "category_id" });
Product.belongsTo(Category, { foreignKey: "category_id" });

//Order and Order_Item
Order.hasMany(OrderItem, { foreignKey: "order_id" });
OrderItem.belongsTo(Order, { foreignKey: "order_id" });

//OrderItem and Product
Product.hasMany(OrderItem, { foreignKey: "product_id" });
OrderItem.belongsTo(Product, { foreignKey: "product_id" });

//OrderItem and currency
Currency.hasMany(OrderItem, { foreignKey: "currency_id" });
OrderItem.belongsTo(Currency, { foreignKey: "currency_id" });

//Product and currency
Currency.hasMany(Product, { foreignKey: "currency_id" });
Product.belongsTo(Currency, { foreignKey: "currency_id" });

const models = {
  User,
  UserOtp,
  Currency,
  Category,
  Product,
  Order,
  OrderItem,
};

db.models = models;
db.sequelize = db;
db.Sequelize = Sequelize;
module.exports = { db, models };
