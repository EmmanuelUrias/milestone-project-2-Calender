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
    var User = /** @class */ (function (_super) {
        __extends(User, _super);
        function User() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        User.associate = function (models) {
            User.hasMany(models.Friend, {
                foreignKey: "user_ID",
                as: "friends"
            });
            User.hasMany(models.Event, {
                foreignKey: "user_ID",
                as: "events"
            });
            User.hasMany(models.Report, {
                foreignKey: "user_ID",
                as: "reports"
            });
        };
        return User;
    }(sequelize_1.Model));
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
        sequelize: sequelize,
        modelName: 'User',
        tableName: 'user_access',
        timestamps: false
    });
    return User;
};
