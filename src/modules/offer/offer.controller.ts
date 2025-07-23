import { Request, Response } from 'express';
import { OfferService } from './offer.service';
import { validateDto } from '../../common/util/validate-dto';
import { PaginationDto } from '../../common/dto/pagination.dto';
import { IUser } from '../../databases/mongodb/model/user.model';

export class OfferController {
    static async getAllOffers(req: Request, res: Response) {
        return await OfferService.getAllOffers();
    }

    static async getTopOrderedOffersWithStatistics(
        req: Request,
        res: Response,
    ) {
        const paginationDto = await validateDto(PaginationDto, req.query);
        if (!paginationDto) return;
        const user = JSON.parse(req.headers.user as string) as IUser;
        return await OfferService.getTopOrderedOffersWithStatistics(
            user._id.toString(),
            paginationDto,
        );
    }

    static async getTopOrderedOffersWithStatisticsNear(
        req: Request,
        res: Response,
    ) {
        const paginationDto = await validateDto(PaginationDto, req.query);
        if (!paginationDto) return;
        const user = JSON.parse(req.headers.user as string) as IUser;
        return await OfferService.getTopOrderedOffersWithStatisticsNear(
            user._id.toString(),
            paginationDto,
        );
    }
}
