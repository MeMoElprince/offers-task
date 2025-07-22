import { model, Schema } from 'mongoose';
import { IOrder } from '../../../databases/mongodb/model/order.model';
import { OrderStatusEnum } from '../enum/status.enum';

const schema = new Schema<IOrder>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
        offerId: { type: Schema.Types.ObjectId, required: true },
        quantity: { type: Number, required: true },
        itemPrice: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        status: {
            type: String,
            required: true,
            enum: OrderStatusEnum,
            default: OrderStatusEnum.PENDING,
        },
    },
    {
        timestamps: true,
    },
);

export default model<IOrder>('Order', schema);
