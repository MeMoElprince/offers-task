import { Document, Schema } from 'mongoose';

export interface IOffer extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description?: string;
    price: number;
    storeId: Schema.Types.ObjectId;
    isActive: boolean;
}
