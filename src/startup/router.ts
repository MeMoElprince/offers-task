import { Express, Router } from 'express';
import IGlobalResponse from '../common/interface/global-response.interface';
import GlobalErrorController from '../common/middleware/global-error.controller';
import { AppError } from '../common/util/AppError';

import offerRouter from '../modules/offer/offer.module';

const routerSetup = (app: Express) =>
    app

        .use('/api/offers', offerRouter)

        .use((req, res, next) => {
            console.log(`Request received: ${req.method} ${req.url}`);
            return next(
                AppError.notFound(
                    'The requested route does not exist',
                    'ROUTE_NOT_FOUND',
                ),
            );
        })

        .use(GlobalErrorController.handleError);

export default routerSetup;
