import express from 'express';
import { OfferController } from './offer.controller';
import wrapperHandler from '../../common/util/wrapper-handler';
import { AuthMiddleware } from '../auth/middleware/auth.middleware';
import { RoleEnum } from '../user/enum/role.enum';

const router = express.Router();

router.route('/').get(wrapperHandler(OfferController.getAllOffers));
router
    .route('/top-offers')
    .get(
        AuthMiddleware.protect,
        AuthMiddleware.restrictTo(RoleEnum.CUSTOMER),
        wrapperHandler(OfferController.getTopOrderedOffersWithStatistics),
    );
router
    .route('/top-offers-near-aggregation')
    .get(
        AuthMiddleware.protect,
        AuthMiddleware.restrictTo(RoleEnum.CUSTOMER),
        wrapperHandler(OfferController.getTopOrderedOffersWithStatisticsNear),
    );

export default router;
