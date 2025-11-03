const { DataTypes } = require("sequelize");
const BaseModel = require("./base");
const { db } = require("../../common/databaseConnection");

class Category extends BaseModel {}

Category.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "unique_name",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(db),
    tableName: "category",
  }
);

module.exports = { Category };
