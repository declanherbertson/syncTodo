"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var postgres_1 = require("@vercel/postgres");
function createTables() {
    return __awaiter(this, void 0, void 0, function () {
        var query, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = (0, postgres_1.sql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    CREATE TABLE IF NOT EXISTS notes (\n      note_id VARCHAR(255),\n      strings TEXT[] NOT NULL,\n      primary key (note_id)\n    );\n  "], ["\n    CREATE TABLE IF NOT EXISTS notes (\n      note_id VARCHAR(255),\n      strings TEXT[] NOT NULL,\n      primary key (note_id)\n    );\n  "])));
                    return [4 /*yield*/, query];
                case 1:
                    rows = (_a.sent()).rows;
                    console.log('Table created successfully');
                    return [2 /*return*/];
            }
        });
    });
}
function seeTables() {
    return __awaiter(this, void 0, void 0, function () {
        var query, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = (0, postgres_1.sql)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    SELECT * FROM pg_tables;\n  "], ["\n    SELECT * FROM pg_tables;\n  "])));
                    return [4 /*yield*/, query];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2 /*return*/, rows];
            }
        });
    });
}
function listNotes() {
    return __awaiter(this, void 0, void 0, function () {
        var query, rows;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    query = (0, postgres_1.sql)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    SELECT * FROM notes;\n  "], ["\n    SELECT * FROM notes;\n  "])));
                    return [4 /*yield*/, query];
                case 1:
                    rows = (_a.sent()).rows;
                    return [2 /*return*/, rows];
            }
        });
    });
}
var router = express_1.default.Router();
router.get('/create', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, createTables()];
            case 1:
                _a.sent();
                res.send("Table created successfully");
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.send("Error creating table");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/list', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rows, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, seeTables()];
            case 1:
                rows = _a.sent();
                res.status(200).json(rows);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                res.send("Error listing tables");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/notes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rows, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, listNotes()];
            case 1:
                rows = _a.sent();
                res.status(200).json(rows);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.send("Error listing notes");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.get('/dropNotes', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var query, rows, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                query = (0, postgres_1.sql)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      DROP TABLE notes;\n    "], ["\n      DROP TABLE notes;\n    "])));
                return [4 /*yield*/, query];
            case 1:
                rows = (_a.sent()).rows;
                res.send("Table dropped successfully");
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                res.send("Error dropping table");
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
router.post('/sql', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var client, query, rows, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, postgres_1.db.connect()];
            case 1:
                client = _a.sent();
                query = req.body.query;
                return [4 /*yield*/, client.sql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["", ""], ["", ""])), query)];
            case 2:
                rows = (_a.sent()).rows;
                res.status(200).json(rows);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                res.status(500).json(JSON.stringify(error_5));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
