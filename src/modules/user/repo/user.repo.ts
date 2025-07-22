import { IUser } from '../../../databases/mongodb/model/user.model';
import UserSchema from '../schema/user.schema';

export class UserRepo {
    static async findUserById(userId: string): Promise<IUser | null> {
        const user = await UserSchema.findById(userId).lean();
        return user;
    }
}
