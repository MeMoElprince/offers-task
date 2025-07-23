import { Document, Schema } from 'mongoose';
import { RoleEnum } from '../../../modules/user/enum/role.enum';

export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: RoleEnum;
    phoneNumber?: string;
    geoLocation: {
        type: 'Point';
        coordinates: [number, number];
    };
}
