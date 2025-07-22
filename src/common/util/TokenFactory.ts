import { ENV_VARIABLES } from '../config/env.config';
import { JWTTokenEnum } from '../enum/token.enum';
import { TokenPayloadMap } from '../type/token-type';
import { sign, verify } from 'jsonwebtoken';
import { StringValue } from 'ms';
import { AppError } from './AppError';

export class TokenFactory {
    static generateToken<T extends JWTTokenEnum>(
        type: T,
        payload: TokenPayloadMap[T],
    ): string {
        const secret =
            type === JWTTokenEnum.ACCESS
                ? ENV_VARIABLES.jwtSecret
                : ENV_VARIABLES.jwtSecret; // TODO handle different secrets for different token types if needed
        return sign(payload, secret, {
            expiresIn: ENV_VARIABLES.jwtExpiration as StringValue,
        });
    }

    static verifyToken<T extends JWTTokenEnum>(
        type: T,
        token: string,
    ): TokenPayloadMap[T] {
        try {
            const secret =
                type === JWTTokenEnum.ACCESS
                    ? ENV_VARIABLES.jwtSecret
                    : ENV_VARIABLES.jwtSecret; // TODO handle different secrets for different token types if needed
            return verify(token, secret) as TokenPayloadMap[T];
        } catch (error) {
            console.error('Token verification failed:', error);
            throw new Error('Invalid token');
        }
    }
}
