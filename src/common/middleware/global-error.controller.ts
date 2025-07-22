import { NextFunction, Request, Response } from 'express';
import { AppError } from '../util/AppError';
import IGlobalResponse from '../interface/global-response.interface';
import { ENV_VARIABLES } from '../config/env.config';
import { EnvironmentEnum } from '../enum/env.enum';

export default class GlobalErrorController {
    static handleError(
        err: AppError,
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        console.error(err);

        const response: IGlobalResponse<null> = {
            success: false,
            statusCode: err.statusCode || 500,
            error: {
                enum: err.enumToken || 'UNKNOWN_ERROR',
                message: err.message || 'An unexpected error occurred.',
                stack: undefined,
            },
        };

        if (ENV_VARIABLES.environment === EnvironmentEnum.DEVELOPMENT) {
            if (response.error) response.error.stack = err.stack;
        } else {
            if (!err.isOperational && response.error) {
                response.error.enum = 'UNKNOWN_ERROR';
                response.error.message = 'An unexpected error occurred.';
                response.statusCode = 500;
            }
        }

        return res.status(response.statusCode).json(response);
    }
}
