const { DataTypes } = require("sequelize");
const BaseModel = require("./base");
const { db } = require("../../common/databaseConnection");

class OrderItem extends BaseModel {}

OrderItem.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(db),
    tableName: "order_item",
  }
);

module.exports = { OrderItem };
