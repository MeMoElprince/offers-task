import OfferSchema from '../../../modules/offer/schema/offer.schema';

export const seedOffer = async () => {
    const offers = [
        {
            _id: '60c72b2f9b1e8d3f4c8b4567',
            name: 'Special Discount',
            description: 'Get 20% off on your first purchase',
            minimumAmount: 50,
            maximumAmount: 500,
            percentageDiscount: 20,
            storeId: '60c72b2f9b1e8d3f4c8b4568',
            isActive: true,
        },
        {
            _id: '60c72b2f9b1e2d3f4c8a4567',
            name: 'Special Discount 2',
            description: 'Get 30% off on your first purchase',
            minimumAmount: 80,
            maximumAmount: 600,
            percentageDiscount: 30,
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
