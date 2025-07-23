import express from 'express';
import { OfferController } from './offer.controller';
import wrapperHandler from '../../common/util/wrapper-handler';

const router = express.Router();

router.route('/').get(wrapperHandler(OfferController.getAllOffers, 201));




export default router;