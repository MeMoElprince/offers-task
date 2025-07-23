import { IUser } from '../../../databases/mongodb/model/user.model';
import { RoleEnum } from '../enum/role.enum';
import { ICreateNewCustomer } from '../interface/user.interface';
import UserSchema from '../schema/user.schema';

export class UserRepo {
    static async findUserById(userId: string): Promise<IUser | null> {
        const user = await UserSchema.findById(userId).lean();
        return user;
    }

    static async findUserByEmail(email: string) {
        const user = await UserSchema.findOne({
            email: email,
        });
        return user;
    }

    static async createNewCustomer(data: ICreateNewCustomer): Promise<IUser> {
        const user = new UserSchema({ ...data, role: RoleEnum.CUSTOMER });
        return await user.save();
    }
}
