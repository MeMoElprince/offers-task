import { Document, Schema } from 'mongoose';

export interface IOffer extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    description?: string;
    minimumAmount: number;
    maximumAmount: number;
    percentageDiscount: number;
    storeId: Schema.Types.ObjectId;
    isActive: boolean;
}
