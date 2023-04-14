'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    var Friend = /** @class */ (function (_super) {
        __extends(Friend, _super);
        function Friend() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Friend.associate = function (models) {
            Friend.belongsTo(models.User, {
                foreignKey: "user_ID",
                as: "user"
            });
        };
        return Friend;
    }(sequelize_1.Model));
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
        sequelize: sequelize,
        modelName: 'Friend',
        tableName: 'friends',
        timestamps: false
    });
    return Friend;
};
