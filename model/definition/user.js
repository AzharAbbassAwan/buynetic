const { DataTypes } = require("sequelize");
const BaseModel = require("./base");
const { db } = require("../../common/databaseConnection");

class User extends BaseModel {}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "unique_email",
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        name: "unique_user_name",
      },
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    role: {
      type: DataTypes.ENUM("admin", "user"),
      allowNull: false,
      defaultValue: "user",
    },
    ...BaseModel.baseAttributes(DataTypes),
  },
  {
    ...BaseModel.baseOptions(db),
    tableName: "user",
  }
);

module.exports = { User };
