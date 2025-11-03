const { DataTypes } = require("sequelize");
const { db } = require("../../common/databaseConnection");
const BaseModel = require("./base");

class Order extends BaseModel {}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    total_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM(
        "pending",
        "paid",
        "shipped",
        "delivered",
        "cancelled"
      ),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(db),
    tableName: "order",
  }
);

module.exports = { Order };
