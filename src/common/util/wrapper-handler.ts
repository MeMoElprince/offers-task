import { NextFunction, Request, Response } from 'express';
import IGlobalResponse from '../interface/global-response.interface';

export default function wrapperHandler(fn: any, statusCode = 200) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await fn(req, res, next);
            const response: IGlobalResponse<any> = {
                data,
                message: 'Request was successful',
                success: true,
                statusCode,
            };
            return res.status(response.statusCode).json(response);
        } catch (err) {
            return next(err);
        }
    };
}
