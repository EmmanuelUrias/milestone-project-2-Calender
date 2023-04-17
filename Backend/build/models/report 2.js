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
    var Report = /** @class */ (function (_super) {
        __extends(Report, _super);
        function Report() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Report.associate = function (models) {
            Report.belongsTo(models.User, {
                foreignKey: "user_ID",
                as: "user"
            });
        };
        return Report;
    }(sequelize_1.Model));
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
        sequelize: sequelize,
        modelName: 'Report',
        tableName: 'reported_users',
        timestamps: false
    });
    return Report;
};