import { Schema } from 'mongoose';
import OfferSchema from '../../../modules/offer/schema/offer.schema';
import { IOffer } from '../model/offer.model';

export const seedOffer = async () => {
    const offers = [
        {
            _id: '60c72b2f9b1e8d3f4c8b4567',
            name: 'Special Discount',
            description: 'Get 20% off on your first purchase',
            price: 100,
            storeId: '60c72b2f9b1e8d3f4c8b4568',
            isActive: true,
        },
        {
            _id: '60c72b2f9b1e8d3f4c8a4567',
            name: 'Special Discount 2',
            description: 'Get 30% off on your first purchase',
            price: 80,
            storeId: '60c72b2f9b1e8d3f4c8b4571',
            isActive: true,
        },
    ];
    await OfferSchema.deleteMany({
        _id: { $in: offers.map((offer) => offer._id) },
    });
    await OfferSchema.insertMany(offers);
    console.log('✅ Offers seeded successfully');
};
