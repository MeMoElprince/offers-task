"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mongooseConnect;
const mongoose_1 = require("mongoose");
async function mongooseConnect() {
    const mongoDBURI = process.env.MONGO_URI ?? 'mongodb://localhost:27017';
    await (0, mongoose_1.connect)(mongoDBURI);
}
