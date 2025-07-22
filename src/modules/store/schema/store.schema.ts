import { model, Schema } from 'mongoose';
import { IStore } from '../../../databases/mongodb/model/store.model';

const schema = new Schema<IStore>(
    {
        name: { type: String, required: true, trim: true },
        description: { type: String, required: false, trim: true },
        location: {
            type: {
                address: { type: String, required: true },
                city: { type: String, required: true },
                state: { type: String, required: true },
                zipCode: { type: String, required: true },
            },
            required: false,
        },
        contactNumber: { type: String, required: false },
        email: { type: String, required: false, trim: true, lowercase: true },
        geoLocation: {
            type: {
                latitude: { type: Number, required: true },
                longitude: { type: Number, required: true },
            },
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default model<IStore>('Store', schema);
