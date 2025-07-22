import { model, Schema } from 'mongoose';
import { IOffer } from '../../../databases/mongodb/model/offer.model';

const schema = new Schema<IOffer>({
    name: { type: String, required: true, trim: true },
    description: { type: String, required: false, trim: true },
    price: { type: Number, required: true },
    storeId: { type: Schema.Types.ObjectId, ref: 'Store', required: true },
});

export default model<IOffer>('Offer', schema);
