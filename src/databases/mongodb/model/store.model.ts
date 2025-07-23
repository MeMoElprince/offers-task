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
        latitude: number;
        longitude: number;
    };
    contactNumber?: string;
    email?: string;
}
