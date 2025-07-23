import { Document, Schema } from 'mongoose';

export interface IOffer extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description?: string;
    minimumAmount: number;
    maximumAmount: number;
    percentageDiscount: number;
    storeId: Schema.Types.ObjectId;
    storeGeoLocation: {
        type: 'Point';
        coordinates: [number, number]; // [longitude, latitude]
    }
    isActive: boolean;
}
