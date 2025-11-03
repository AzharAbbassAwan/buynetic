const { DataTypes } = require("sequelize");
const BaseModel = require("./base");
const { db } = require("../../common/databaseConnection");

class UserOtp extends BaseModel {}

UserOtp.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    purpose: {
      type: DataTypes.ENUM("password_reset", "2fa", "email_verification"),
      allowNull: false,
    },
    is_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    expire_at: {
      type: DataTypes.DATE,
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
    tableName: "user_otp",
  }
);

module.exports = { UserOtp };
