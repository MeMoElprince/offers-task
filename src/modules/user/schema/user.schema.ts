import { model, Schema } from 'mongoose';
import { IUser } from '../../../databases/mongodb/model/user.model';
import { RoleEnum } from '../enum/role.enum';

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
    },
    {
        timestamps: true,
    },
);

export default model<IUser>('User', schema);
