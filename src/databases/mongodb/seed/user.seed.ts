import UserSchema from '../../../modules/user/schema/user.schema';
import { RoleEnum } from '../../../modules/user/enum/role.enum';
import bcrypt from 'bcryptjs';
import { IUser } from '../model/user.model';

export const seedUser = async () => {
    const users = [
        {
            _id: '60c12b2f9b1e8d3f4c8b4567',
            firstName: 'MeMo',
            lastName: 'Admin',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('MeMo@1', 10),
            role: RoleEnum.ADMIN,
            phoneNumber: '+201222222222',
            geoLocation: {
                type: 'Point',
                coordinates: [-121.8863, 37.3382], // San Jose coordinates
            },
        },
        {
            _id: '60c12b2f9b1e8d3f4c8b4564',
            firstName: 'second',
            lastName: 'User',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('MeMo@1', 10),
            role: RoleEnum.CUSTOMER,
            phoneNumber: '+201111111111',
            geoLocation: {
                type: 'Point',
                coordinates: [-121.8863, 37.3382], // San Jose coordinates
            },
        },
        {
            _id: '60c12b2f9b1e8d3f4c8b4534',
            firstName: 'Mustafa',
            lastName: 'Elsharawy',
            email: 'memomeme621@gmail.com',
            password: bcrypt.hashSync('MeMo@1', 10),
            role: RoleEnum.CUSTOMER,
            phoneNumber: '+201111122111',
            geoLocation: {
                type: 'Point',
                coordinates: [-121.8863, 37.3382], // San Jose coordinates
            },
        },
    ];
    await UserSchema.deleteMany({
        _id: { $in: users.map((user) => user._id) },
    });
    await UserSchema.insertMany(users);
    console.log('✅ Users seeded successfully');
};
