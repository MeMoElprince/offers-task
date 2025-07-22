"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = __importDefault(require("../databases/mongodb/mongodb"));
const appSetup = async (app) => {
    try {
        const PORT = process.env.PORT || 3000;
        await Promise.all([(0, mongodb_1.default)()]);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (err) {
        console.error('Error during app setup:', err);
    }
};
exports.default = appSetup;
