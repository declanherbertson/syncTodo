"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mainRoute_1 = __importDefault(require("./mainRoute"));
var routes = function (app) {
    var API_ROUTE = '/api';
    app.use('/', mainRoute_1.default);
};
exports.default = routes;
