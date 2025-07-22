import { Document } from 'mongoose';
import { RoleEnum } from '../../../modules/user/enum/role.enum';

export interface IUser extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: RoleEnum;
    phoneNumber?: string;
}
