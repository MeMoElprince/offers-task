export class AppError extends Error {
    constructor(
        public message: string,
        public enumToken: string,
        public isOperational: boolean,
        public statusCode: number,
        public errorData?: any,
    ) {
        super(message);
        this.message = message;
        this.name = 'AppError';
        this.enumToken = enumToken;
        this.isOperational = isOperational;
        this.statusCode = statusCode;
        this.errorData = errorData;
        Error.captureStackTrace(this, this.constructor);
    }

    static customError(message: string, enumToken: string, statusCode: number) {
        return new AppError(
            message,
            enumToken,
            statusCode >= 400 && statusCode < 500,
            statusCode >= 400 ? statusCode : 500,
        );
    }

    static notFound(message: string, enumToken: string) {
        return new AppError(message, enumToken, true, 404);
    }

    static badRequest(message: string, enumToken: string, data?: any) {
        return new AppError(message, enumToken, true, 400, data);
    }

    static unauthorized(message: string, enumToken: string) {
        return new AppError(message, enumToken, true, 401);
    }

    static forbidden(message: string, enumToken: string) {
        return new AppError(message, enumToken, true, 403);
    }

    static internalServerError(message: string, enumToken: string) {
        return new AppError(message, enumToken, false, 500);
    }
}
