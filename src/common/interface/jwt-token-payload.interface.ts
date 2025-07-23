import { RoleEnum } from '../../modules/user/enum/role.enum';

export interface IJWTAccessTokenPayload {
    userId: string;
    role: RoleEnum;
    email: string;
    iat?: number;
    exp?: number;
}

export interface IJWTRefreshTokenPayload {
    userId: string;
    role: RoleEnum;
    email: string;
    iat?: number;
    exp?: number;
}
