import { Transform } from 'class-transformer';
import {
    IsEmail,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
} from 'class-validator';

export class LoginDto {
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}

export class SignupDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    firstName!: string;

    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.trim())
    lastName!: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @Transform(({ value }) => value.toLowerCase().trim())
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

    @IsPhoneNumber()
    @IsOptional()
    phoneNumber?: string;
}
