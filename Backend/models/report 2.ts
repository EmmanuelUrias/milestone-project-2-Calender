'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

interface ReportAttributes {
  reported_user_ID: number,
  report_user_email: string,
  user_ID: number
}

interface Report2DataTypes {
  INTEGER: any,
  STRING: string,
  SMALLINT: any
}
module.exports = (sequelize: Sequelize, DataTypes: Report2DataTypes) => {
  class Report extends Model<ReportAttributes> {

    static associate(models: { User: any}) {
      Report.belongsTo(models.User, {
        foreignKey: "user_ID",
        as: "user"
      })
    }
  }
  Report.init({
    reported_user_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    report_user_email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Report',
    tableName: 'reported_users',
    timestamps: false
  });
  return Report;
};