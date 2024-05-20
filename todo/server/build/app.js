"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
var PORT = process.env.PORT || 4000;
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
routes_1.default(app);
app.listen(PORT, function () {
    return console.log("server running in http://localhost:" + PORT);
});
exports.default = app;
