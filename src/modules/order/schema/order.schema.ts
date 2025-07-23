import { model, Schema } from 'mongoose';
import { IOrder } from '../../../databases/mongodb/model/order.model';
import { OrderStatusEnum } from '../enum/status.enum';

const schema = new Schema<IOrder>(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        offerId: { type: Schema.Types.ObjectId, ref: 'Offer', required: true },
        discount: { type: Number, required: true, min: 0 },
        amount: { type: Number, required: true },
        finalAmount: { type: Number, required: true },
        items: {
            type: [
                {
                    productName: {
                        type: Schema.Types.ObjectId,
                        ref: 'Product',
                        required: true,
                    },
                    quantity: { type: Number, required: true, min: 1 },
                    price: { type: Number, required: true, min: 0 },
                    totalPrice: {
                        type: Number,
                        required: true,
                        min: 0,
                        validate: {
                            validator: function (value: number) {
                                return value === this.price * this.quantity;
                            },
                        },
                        message:
                            'Total price must equal price multiplied by quantity',
                    },
                },
            ],
            required: true,
        },
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
