const { DataTypes } = require("sequelize");
const { db } = require("../../common/databaseConnection");
const BaseModel = require("./base");

class Currency extends BaseModel {}

Currency.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    symbol: {
      type: DataTypes.STRING(5),
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: false,
      unique: {
        name: "unique_code",
      },
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(db),
    tableName: "currency",
  }
);

module.exports = { Currency };
