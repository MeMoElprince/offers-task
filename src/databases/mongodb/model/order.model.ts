import { Document, Schema } from 'mongoose';
import { OrderStatusEnum } from '../../../modules/order/enum/status.enum';

export interface IOrder extends Document {
    _id: string;
    userId: Schema.Types.ObjectId;
    offerId: Schema.Types.ObjectId;
    quantity: number;
    itemPrice: number;
    totalPrice: number;
    status: OrderStatusEnum;
}
