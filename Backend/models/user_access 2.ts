'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

interface UserAccessAttributes {
  user_id: number,
  user_email: string,
  user_password: string
}

interface UserAccess2DataTypes {
  INTEGER: any,
  STRING: string
}

module.exports = (sequelize: Sequelize, DataTypes: UserAccess2DataTypes) => {
  class User extends Model<UserAccessAttributes> {

    static associate(models: { Friend: any, Event: any, Report: any }) {
      User.hasMany(models.Friend, {
        foreignKey: "user_ID",
        as: "friends"
      })

      User.hasMany(models.Event, {
        foreignKey: "user_ID",
        as: "events"
      })

      User.hasMany(models.Report, {
        foreignKey: "user_ID",
        as: "reports"
      })
    }
  }
  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user_access',
    timestamps: false
  })

  return User;
};