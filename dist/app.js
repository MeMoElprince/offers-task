"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const init_1 = __importDefault(require("./startup/init"));
const express_1 = __importDefault(require("express"));
const security_1 = __importDefault(require("./startup/security"));
const router_1 = __importDefault(require("./startup/router"));
const app = (0, express_1.default)();
(0, init_1.default)(app);
(0, security_1.default)(app, express_1.default);
(0, router_1.default)(app);
