import { Document, Schema } from 'mongoose';

export interface IStore extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description?: string;
    location?: {
        address: string;
        city: string;
        state: string;
        zipCode: string;
    };
    geoLocation: {
        type: 'Point';
        coordinates: [number, number];
    };
    contactNumber?: string;
    email?: string;
}
