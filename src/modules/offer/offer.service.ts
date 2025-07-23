import { OfferRepo } from './repo/offer.repo';

export class OfferService {
    static async getOffer() {
        // Logic to get an offer
    }

    static async getAllOffers() {
        return await OfferRepo.findAllOffers();
    }
}
