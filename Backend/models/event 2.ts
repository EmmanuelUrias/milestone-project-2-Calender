'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

interface EventAttributes {
  event_ID: number,
  event_title: string,
  event_location: string,
  event_date: string,
  description: string,
  user_ID: number
}

interface Event2DataTypes {
  INTEGER: any,
  STRING: string,
  DATEONLY: string,
  TEXT: string,
  SMALLINT: any
}

module.exports = (sequelize: Sequelize, DataTypes: Event2DataTypes) => {
  class Event extends Model<EventAttributes> {

    static associate(models: { User: any}) {
      Event.belongsTo(models.User, {
        foreignKey: "user_ID",
        as: "user"
      })
    }
  }
  Event.init({
    event_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    event_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    user_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  })
  return Event;
};