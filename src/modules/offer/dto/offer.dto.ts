import { IntersectionType, OmitType, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
    IsBoolean,
    IsInt,
    IsMongoId,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Max,
    Min,
} from 'class-validator';
import { PaginationDto } from '../../../common/dto/pagination.dto';

export class OfferDto {
    @IsMongoId()
    @IsNotEmpty()
    _id!: string;

    @IsNotEmpty()
    @IsString()
    name!: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsNumber()
    @IsNotEmpty()
    minimumAmount!: number;

    @IsNumber()
    @IsNotEmpty()
    maximumAmount!: number;

    @IsInt()
    @Min(0)
    @Max(100)
    @IsNotEmpty()
    percentageDiscount!: number;

    @IsMongoId()
    @IsNotEmpty()
    storeId!: string;

    @IsBoolean()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsNotEmpty()
    isActive!: boolean;
}

export class OfferFilterDto extends PartialType(
    IntersectionType(
        OmitType(OfferDto, [
            'description',
            'maximumAmount',
            'minimumAmount',
            'name',
        ]),
        PaginationDto,
    ),
) {}
