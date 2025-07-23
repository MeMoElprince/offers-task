import { model, Schema } from 'mongoose';
import { IUser } from '../../../databases/mongodb/model/user.model';
import { RoleEnum } from '../enum/role.enum';
import bcrypt from 'bcryptjs';

const schema = new Schema<IUser>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: { type: String, required: true },
        role: { type: String, required: true, enum: RoleEnum },
        firstName: { type: String, required: true, trim: true },
        lastName: { type: String, required: true, trim: true },
        phoneNumber: { type: String, required: false },
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

schema.index({ geolocation: '2dsphere' });

schema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    // then there is an update happening
    // hash the password here
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

schema.methods.comparePassword = async function (
    password: string,
    correctPassword: string,
) {
    return await bcrypt.compare(password, correctPassword);
};

export default model<IUser>('User', schema);
