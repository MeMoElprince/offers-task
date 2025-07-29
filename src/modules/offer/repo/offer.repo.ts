import { PaginationDto } from '../../../common/dto/pagination.dto';
import OfferSchema from '../schema/offer.schema';

export class OfferRepo {
    static async findAllOffers() {
        return await OfferSchema.find();
    }

    static async findTopOrderedOffersWithStatistics(
        userCoords: [number, number],
        paginationDto: PaginationDto,
    ) {
        console.log('Got here');
        const { page = 1, limit = 10 } = paginationDto;
        const skip = (page - 1) * limit;

        return await OfferSchema.aggregate([
            { $match: { isActive: true } },
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'offerId',
                    as: 'orders',
                },
            },
            {
                $addFields: {
                    totalOrders: { $size: '$orders' },
                    totalRevenue: { $sum: '$orders.finalAmount' },
                },
            },
            { $match: { totalOrders: { $gte: 2 } } },
            {
                $lookup: {
                    from: 'stores',
                    localField: 'storeId',
                    foreignField: '_id',
                    as: 'store',
                },
            },
            { $unwind: '$store' },
            {
                $addFields: {
                    distance: {
                        $let: {
                            vars: {
                                lat: {
                                    $arrayElemAt: [
                                        '$store.geoLocation.coordinates',
                                        1,
                                    ],
                                },
                                lon: {
                                    $arrayElemAt: [
                                        '$store.geoLocation.coordinates',
                                        0,
                                    ],
                                },
                            },
                            in: {
                                $sqrt: {
                                    $add: [
                                        {
                                            $pow: [
                                                {
                                                    $subtract: [
                                                        '$$lat',
                                                        userCoords[1],
                                                    ],
                                                },
                                                2,
                                            ],
                                        },
                                        {
                                            $pow: [
                                                {
                                                    $subtract: [
                                                        '$$lon',
                                                        userCoords[0],
                                                    ],
                                                },
                                                2,
                                            ],
                                        },
                                    ],
                                },
                            },
                        },
                    },
                },
            },
            { $sort: { totalOrders: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    percentageDiscount: 1,
                    totalOrders: 1,
                    totalRevenue: 1,
                    distance: 1,
                    store: {
                        _id: 1,
                        name: 1,
                        geoLocation: 1,
                        description: 1,
                    },
                },
            },
        ]);
    }

    static async findTopOrderedOffersWithStatisticsNear(
        userCoords: [number, number],
        paginationDto: PaginationDto,
    ) {

        const { page = 1, limit = 10 } = paginationDto;
        const skip = (page - 1) * limit;

        return await OfferSchema.aggregate([    
            {
                $geoNear: {
                    near: {
                        type: 'Point',
                        coordinates: userCoords,
                    },
                    distanceField: 'distance',
                    key: 'storeGeoLocation', // Flattened geo field
                    spherical: true,
                },
            },
            { $match: { isActive: true } },
            {
                $lookup: {
                    from: 'orders',
                    localField: '_id',
                    foreignField: 'offerId',
                    as: 'orders',
                },
            },
            {
                $addFields: {
                    totalOrders: { $size: '$orders' },
                    totalRevenue: { $sum: '$orders.finalAmount' },
                },
            },
            { $match: { totalOrders: { $gte: 2 } } },
            {
                $lookup: {
                    from: 'stores',
                    localField: 'storeId',
                    foreignField: '_id',
                    as: 'store',
                },
            },
            { $unwind: '$store' },
            { $sort: { totalOrders: -1 } },
            { $skip: skip },
            { $limit: limit },
            {
                $project: {
                    _id: 1,
                    name: 1,
                    percentageDiscount: 1,
                    totalOrders: 1,
                    totalRevenue: 1,
                    distance: 1,
                    store: {
                        _id: 1,
                        name: 1,
                        geoLocation: 1,
                        description: 1,
                    },
                },
            },
        ]);
    }
}
