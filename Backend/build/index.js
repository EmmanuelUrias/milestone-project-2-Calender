"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
require('dotenv').config();
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var path_1 = __importDefault(require("path"));
var cors_1 = __importDefault(require("cors"));
var port = process.env.PORT || 4002;
require('pg');
// CONFIGURATION / MIDDLEWARE
app.use((0, cors_1.default)({
    origin: 'https://milestone-project-2-calender-frontend4.vercel.app',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
}));
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    next();
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.join(__dirname, "../build")));
//CONTROLLERS
var event_controller_1 = __importDefault(require("./controller/event_controller"));
app.use('/api/events', event_controller_1.default);
var friend_controller_1 = __importDefault(require("./controller/friend_controller"));
app.use('/api/friends', friend_controller_1.default);
var user_controller_1 = __importDefault(require("./controller/user_controller"));
app.use('/api/users', user_controller_1.default);
var report_controller_1 = __importDefault(require("./controller/report_controller"));
app.use('/api/reports', report_controller_1.default);
//SERVER STATIC RENDERING
app.get('/', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "../build/index.html"));
    console.log(path_1.default.join(__dirname, "../build/index.html"));
});
// LISTEN
app.listen(port, function () {
    console.log("\uD83C\uDFB8 Rockin' on port: ".concat(port));
});
