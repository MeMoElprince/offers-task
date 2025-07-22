import { model, Schema } from 'mongoose';
import { IOffer } from '../model/offer.model';

const schema = new Schema<IOffer>(
    {
        test: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);

export default model<IOffer>('Offer', schema);
