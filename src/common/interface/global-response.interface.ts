interface IGlobalResponse<T> {
    success: boolean;
    statusCode: number;
    message?: string;
    data?: T;
    error?: {
        message: string;
        enum: string;
        stack?: string | undefined;
    };
}

export default IGlobalResponse;
