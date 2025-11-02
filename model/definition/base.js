const { Model } = require("sequelize");

class BaseModel extends Model {
  static baseAttributes(DataTypes) {
    return {
      created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      deleted_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    };
  }
  static baseOptions(sequelize) {
    return {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      sequelize,
      underscored: true,
      scopes: {
        excludeTimestamps: {
          attributes: { exclude: ["created_at", "updated_at", "deleted_at"] },
        },
        excludeUserFields: {
          attributes: { exclude: ["created_by", "updated_by", "deleted_by"] },
        },
      },
    };
  }
}

module.exports = BaseModel;
