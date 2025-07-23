import OfferSchema from '../schema/offer.schema';

export class OfferRepo {
    static async findAllOffers() {
        return await OfferSchema.find();
    }
}
