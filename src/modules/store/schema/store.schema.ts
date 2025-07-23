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
                type: String,
                enum: ['Point'],
                required: true,
                default: 'Point',
            },
            coordinates: {
                type: [Number],
                required: true,
                validate: {
                    validator: function (coords: number[]) {
                        return (
                            coords.length === 2 &&
                            coords[0] >= -180 &&
                            coords[0] <= 180 && // longitude
                            coords[1] >= -90 &&
                            coords[1] <= 90 // latitude
                        );
                    },
                    message:
                        'Invalid coordinates format. Expected [longitude, latitude]',
                },
            },
        },
    },
    {
        timestamps: true,
    },
);

export default model<IStore>('Store', schema);
