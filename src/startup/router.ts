import { Express } from 'express';
import IGlobalResponse from '../types/global.response';

const routerSetup = (app: Express) =>
    app

        .use('/api/offers', (req, res, next) => {})

        .use((req, res, next) => {
            console.log(`Request received: ${req.method} ${req.url}`);
            const response: IGlobalResponse<null> = {
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

export default routerSetup;
