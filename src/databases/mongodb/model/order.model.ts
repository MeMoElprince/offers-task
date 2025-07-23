import { Document, Schema } from 'mongoose';
import { OrderStatusEnum } from '../../../modules/order/enum/status.enum';

export interface IOrder extends Document {
    _id: Schema.Types.ObjectId;
    userId: Schema.Types.ObjectId;
    offerId: Schema.Types.ObjectId;
    items: {
        productName: string;
        price: string;
        quantity: number;
        totalPrice: string;
    }[];
    amount: number;
    discount: number;
    finalAmount: number;
    status: OrderStatusEnum;
}
