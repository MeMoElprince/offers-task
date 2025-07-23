import { Request, Response } from 'express';
import { OfferService } from './offer.service';

export class OfferController {
    static async getOffer(req: Request, res: Response) {
        // Logic to get an offer
    }

    static async getAllOffers(req: Request, res: Response) {
        return await OfferService.getAllOffers();
    }
}
