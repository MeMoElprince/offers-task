interface IGlobalResponse<T> {
    success: boolean;
    statusCode: number;
    message?: string;
    data?: T;
    error?: {
        message: string;
        enum: string;
        data?: object;
        stack?: string | undefined;
    };
}

export default IGlobalResponse;
