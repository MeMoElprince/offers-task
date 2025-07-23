import { Request, Response } from 'express';
import { OfferRepo } from './repo/offer.repo';

export class OfferController {
    static async getOffer(req: Request, res: Response) {
        // Logic to get an offer
    }

    static async getAllOffers(req: Request, res: Response) {
        return await OfferRepo.findAllOffers();
    }
}
