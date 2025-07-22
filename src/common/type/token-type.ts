import { JWTTokenEnum } from '../enum/token.enum';
import { IJWTAccessTokenPayload } from '../interface/jwt-token-payload.interface';

export type TokenPayloadMap = {
    [JWTTokenEnum.ACCESS]: IJWTAccessTokenPayload;
    [JWTTokenEnum.REFRESH]: { userId: string }; // TODO handle this as interface
    [JWTTokenEnum.RESET_PASSWORD]: { userId: string; resetToken: string }; // TODO handle this as interface
};
