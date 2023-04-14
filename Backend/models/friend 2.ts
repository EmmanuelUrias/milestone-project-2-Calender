'use strict';
import { Model, Sequelize, DataTypes } from 'sequelize';

interface FriendAttributes {
  friend_ID: number,
  user_ID: number,
  accepted_friends: string
}

interface Friend2DataTypes {
  INTEGER: any,
  SMALLINT: any,
  TEXT: string
}

module.exports = (sequelize: Sequelize, DataTypes: Friend2DataTypes) => {
  class Friend extends Model<FriendAttributes> {

    static associate(models: { User: any}) {
      Friend.belongsTo(models.User, {
        foreignKey: "user_ID",
        as: "user"
      })
    }
  }
  Friend.init({
    friend_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_ID: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    accepted_friends: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Friend',
    tableName: 'friends',
    timestamps: false
  })

  return Friend;
};
