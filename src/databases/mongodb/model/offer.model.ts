import { Document, Schema } from 'mongoose';

export interface IOffer extends Document {
    _id: string;
    name: string;
    description?: string;
    price: number;
    storeId: Schema.Types.ObjectId;
}
