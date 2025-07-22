interface IGlobalResponse<T> {
    status: 'success' | 'error';
    message?: string;
    data?: T;
    statusCode?: number;
    error?: {
        description: string;
        enum: string;
    };
}

export default IGlobalResponse;
