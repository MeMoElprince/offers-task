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
    },
    {
        timestamps: true,
    },
);

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
