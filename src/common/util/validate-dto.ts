import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { AppError } from './AppError';

export async function validateDto<T extends object>(
    dtoClass: new () => T,
    body: any,
): Promise<T | null> {
    const instance = plainToInstance(dtoClass, body);
    const errors = await validate(instance);

    if (errors.length > 0) {
        throw AppError.badRequest(
            'Validation failed',
            'VALIDATION_ERROR',
            errors.map((err) => ({
                property: err.property,
                constraints: err.constraints,
            })),
        );
    }

    return instance;
}
