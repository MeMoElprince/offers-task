import { PaginationDto } from '../../common/dto/pagination.dto';
import { AppError } from '../../common/util/AppError';
import { IUser } from '../../databases/mongodb/model/user.model';
import { UserRepo } from '../user/repo/user.repo';
import { OfferFilterDto } from './dto/offer.dto';
import { CustomError } from './localization/custom.error';
import { OfferRepo } from './repo/offer.repo';

export class OfferService {
    static async getOffer() {
        // Logic to get an offer
    }

    static async getAllOffers() {
        return await OfferRepo.findAllOffers();
    }

    static async getTopOrderedOffersWithStatistics(
        userId: string,
        paginationDto: PaginationDto,
    ) {
        const user = await UserRepo.findUserById(userId);
        if (!user)
            throw AppError.notFound(
                'User not found',
                CustomError.USER_NOT_FOUND,
            );

        return await OfferRepo.findTopOrderedOffersWithStatistics(
            user.geoLocation.coordinates as [number, number],
            paginationDto,
        );
    }

    static async getTopOrderedOffersWithStatisticsNear(
        userId: string,
        paginationDto: PaginationDto,
    ) {
        const user = await UserRepo.findUserById(userId);
        if (!user) {
            throw AppError.notFound(
                'User not found',
                CustomError.USER_NOT_FOUND,
            );
        }
        return await OfferRepo.findTopOrderedOffersWithStatisticsNear(
            user.geoLocation.coordinates as [number, number],
            paginationDto,
        );
    }
}
