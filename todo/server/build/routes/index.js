"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mainRoute_1 = __importDefault(require("./mainRoute"));
var listRoute_1 = __importDefault(require("./listRoute"));
var dbAdminRoute_1 = __importDefault(require("./dbAdminRoute"));
var routes = function (app) {
    var API_ROUTE = '/api';
    app.use('/', mainRoute_1.default);
    app.use('/list', listRoute_1.default);
    app.use('/admin', dbAdminRoute_1.default);
};
exports.default = routes;
