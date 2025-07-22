"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routerSetup = (app) => app
    .use('/api/offers', (req, res, next) => { })
    .use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    const response = {
        status: 'error',
        data: null,
        message: 'Route not found',
        error: {
            description: 'The requested route does not exist',
            enum: 'ROUTE_NOT_FOUND',
        },
        statusCode: 404,
    };
    res.status(404).json(response);
});
exports.default = routerSetup;
