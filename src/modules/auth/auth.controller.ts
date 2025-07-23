import { NextFunction, Request, Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, SignupDto } from './dto/auth.dto';
import { validateDto } from '../../common/util/validate-dto'; // adjust path as needed

export class AuthController {
    static async login(req: Request, res: Response, next: NextFunction) {
        const login = await validateDto(LoginDto, req.body);
        if (!login) return;
        return AuthService.login(login);
    }

    static async signup(req: Request, res: Response, next: NextFunction) {
        const signup = await validateDto(SignupDto, req.body);
        if (!signup) return;
        return AuthService.signup(signup);
    }

    static async refreshToken(req: Request, res: Response, next: NextFunction) {
        const { refreshToken } = req.body;
        return AuthService.refreshToken(refreshToken);
    }
}
