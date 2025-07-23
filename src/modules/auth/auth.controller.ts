import { NextFunction, Request, Response } from 'express';
import { ILoginBody, ISignupBody } from './interface/auth.interface';
import { AuthService } from './auth.service';

export class AuthController {
    static async login(req: Request, res: Response, next: NextFunction) {
        const login: ILoginBody = req.body;
        return AuthService.login(login);
    }

    static async signup(req: Request, res: Response, next: NextFunction) {
        const signup: ISignupBody = req.body;
        return AuthService.signup(signup);
    }

    static async refreshToken(req: Request, res: Response, next: NextFunction) {
        const { refreshToken } = req.body;
        return AuthService.refreshToken(refreshToken);
    }
}
