import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../../common/util/AppError';
import { CustomError } from '../localization/custom.error';
import { TokenFactory } from '../../../common/util/TokenFactory';
import { JWTTokenEnum } from '../../../common/enum/token.enum';
import { UserRepo } from '../../user/repo/user.repo';
import { RoleEnum } from '../../user/enum/role.enum';

export class AuthMiddleware {
    static async protect(req: Request, res: Response, next: NextFunction) {
        // Here you would typically check for a valid authentication token or session
        // For example, you might check for a JWT token in the Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer '))
            return next(
                AppError.unauthorized(
                    'Authentication token is invalid, missing or expired',
                    CustomError.INVALID_TOKEN,
                ),
            );

        const token = authHeader.split(' ')[1];
        try {
            // Verify the token (this assumes you have a secret key stored in your environment variables)
            const decoded = TokenFactory.verifyToken(
                JWTTokenEnum.ACCESS,
                token,
            );
            const user = await UserRepo.findUserById(decoded.userId);
            if (!user)
                return next(
                    AppError.unauthorized(
                        'Authentication token is invalid, missing or expired',
                        CustomError.INVALID_TOKEN,
                    ),
                );
            // Attach the user to the header
            req.headers.user = JSON.stringify(user);
        } catch (error) {
            return next(
                AppError.unauthorized(
                    'Authentication token is invalid, missing or expired',
                    CustomError.INVALID_TOKEN,
                ),
            );
        }
        // If the token is valid, proceed to the next middleware or route handler
        next();
    }

    static restrictTo(...roles: RoleEnum[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            const user = JSON.parse(req.headers.user as string);
            // Check if the user's role is included in the allowed roles
            if (!roles.includes(user.role)) {
                return next(
                    AppError.forbidden(
                        'You do not have permission to perform this action',
                        CustomError.FORBIDDEN,
                    ),
                );
            }
            next();
        };
    }

    static async isAuthenticated(
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) return next();
        const token = authHeader.split(' ')[1];
        try {
            // Verify the token (this assumes you have a secret key stored in your environment variables)
            const decoded = TokenFactory.verifyToken(
                JWTTokenEnum.ACCESS,
                token,
            );
            const user = await UserRepo.findUserById(decoded.userId);
            if (!user) return next();
            // Attach the user to the header
            req.headers.user = JSON.stringify(user);
        } catch (error) {
            return next();
        }
        next();
    }
}
