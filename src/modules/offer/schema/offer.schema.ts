import { model, Schema } from 'mongoose';
import { IOffer } from '../../../databases/mongodb/model/offer.model';

const schema = new Schema<IOffer>({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    minimumAmount: { type: Number, required: true, min: 0 },
    maximumAmount: { type: Number, required: true, min: 0 },
    percentageDiscount: { type: Number, required: true, min: 0, max: 100 },
    storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
    isActive: { type: Boolean, default: true },
    storeGeoLocation: {
        type: { type: String, enum: ['Point'], default: 'Point' },
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },
});

schema.index({ storeGeoLocation: '2dsphere' });

export default model<IOffer>('Offer', schema);

// rag approach 

