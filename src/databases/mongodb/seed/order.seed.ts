import { OrderStatusEnum } from '../../../modules/order/enum/status.enum';
import OrderSchema from '../../../modules/order/schema/order.schema';

export const seedOrder = async () => {
    const orders = [
        {
            _id: '60c72b2f9b2e8d3f4c8b4366',
            userId: '60c12b2f9b1e8d3f4c8b4534',
            offerId: '60c72b2f9b1e8d3f4c8b4567',
            quantity: 2,
            itemPrice: 100,
            totalPrice: 200,
            status: OrderStatusEnum.COMPLETED,
        },
        {
            _id: '60c72b2f9b2e8d3f4c8a4566',
            userId: '60c12b2f9b1e8d3f4c8b4534',
            offerId: '60c72b2f9b1e8d3f4c8b4567',
            quantity: 1,
            itemPrice: 100,
            totalPrice: 100,
            status: OrderStatusEnum.PENDING,
        },
        {
            _id: '60c72b2f9b2e8d3f4c2a4566',
            userId: '60c12b2f9b1e8d3f4c8b4564',
            offerId: '60c72b2f9b1e8d3f4c8a4567',
            quantity: 10,
            itemPrice: 100,
            totalPrice: 1000,
            status: OrderStatusEnum.CANCELLED,
        },
        {
            _id: '60c72b2f9b1e8d3f4a8b4566',
            userId: '60c12b2f9b1e8d3f4c8b4564',
            offerId: '60c72b2f9b1e8d3f4c8a4567',
            quantity: 6,
            itemPrice: 100,
            totalPrice: 600,
            status: OrderStatusEnum.PENDING,
        },
    ];
    await OrderSchema.deleteMany({
        _id: { $in: orders.map((order) => order._id) },
    });
    await OrderSchema.insertMany(orders);
    console.log('✅ Orders seeded successfully');
};
