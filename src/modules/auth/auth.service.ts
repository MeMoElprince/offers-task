import { JWTTokenEnum } from '../../common/enum/token.enum';
import { AppError } from '../../common/util/AppError';
import { TokenFactory } from '../../common/util/TokenFactory';
import { UserRepo } from '../user/repo/user.repo';
import { ILoginBody, ISignupBody } from './interface/auth.interface';
import { CustomError } from './localization/custom.error';
import bcrypt from 'bcryptjs';

export class AuthService {
    static async login(login: ILoginBody) {
        const user = await UserRepo.findUserByEmail(login.email);
        if (
            !user ||
            (await this.comparePassword(login.password, user.password))
        )
            throw AppError.badRequest(
                'Invalid username or password',
                CustomError.INVALID_USERNAME_OR_PASSWORD,
            );
        const accessToken = TokenFactory.generateToken(JWTTokenEnum.ACCESS, {
            userId: user._id.toString(),
            role: user.role,
            email: user.email,
        });
        const refreshToken = TokenFactory.generateToken(JWTTokenEnum.REFRESH, {
            userId: user._id.toString(),
            email: user.email,
            role: user.role,
        });
        return {
            accessToken,
            refreshToken,
            user: {
                _id: user._id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                phoneNumber: user.phoneNumber,
            },
        };
    }

    static async signup(signup: ISignupBody) {
        const existingUser = await UserRepo.findUserByEmail(signup.email);
        if (existingUser) {
            throw AppError.badRequest(
                'Email already exists',
                CustomError.EMAIL_ALREADY_EXISTS,
            );
        }
        const newUser = await UserRepo.createNewCustomer({
            firstName: signup.firstName,
            lastName: signup.lastName,
            email: signup.email,
            password: signup.password,
            phoneNumber: signup.phoneNumber,
        });
        return newUser;
    }

    private static async comparePassword(
        password: string,
        hashedPassword: string,
    ): Promise<boolean> {
        return await bcrypt.compare(password, hashedPassword);
    }
}
