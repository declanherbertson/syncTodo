"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = process.env.PORT || 4000;
routes_1.default(app);
app.listen(PORT, function () {
    return console.log("server running in http://localhost:" + PORT);
});
exports.default = app;
