import { Document } from 'mongoose';

export interface IStore extends Document {
    id: string;
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
