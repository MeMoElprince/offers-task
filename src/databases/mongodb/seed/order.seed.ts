import { OrderStatusEnum } from '../../../modules/order/enum/status.enum';
import OrderSchema from '../../../modules/order/schema/order.schema';

export const seedOrder = async () => {
    const orders = [
        {
            _id: '60c72b2f9b2e8d3f4c8b4366',
            userId: '60c12b2f9b1e8d3f4c8b4534',
            offerId: '60c72b2f9b1e8d3f4c8b4567',
            discount: 50,
            amount: 200,
            finalAmount: 150,
            items: [
                {
                    productName: '60f7c2f9a2e8d3f4c8b99991', // dummy product ID
                    quantity: 2,
                    price: 100,
                    totalPrice: 200,
                },
            ],
            status: OrderStatusEnum.COMPLETED,
        },
        {
            _id: '60c72b2f9b2e8d3f4c8a4566',
            userId: '60c12b2f9b1e8d3f4c8b4534',
            offerId: '60c72b2f9b1e8d3f4c8b4567',
            discount: 50,
            amount: 100,
            finalAmount: 50,
            items: [
                {
                    productName: '60f7c2f9a2e8d3f4c8b99991',
                    quantity: 1,
                    price: 100,
                    totalPrice: 100,
                },
            ],
            status: OrderStatusEnum.PENDING,
        },
        {
            _id: '60c72b2f9b2e8d3f4c2a4566',
            userId: '60c12b2f9b1e8d3f4c8b4564',
            offerId: '60c72b2f9b1e2d3f4c8a4567',
            discount: 300,
            amount: 1000,
            finalAmount: 700,
            items: [
                {
                    productName: '60f7c2f9a2e8d3f4c8b99992',
                    quantity: 10,
                    price: 100,
                    totalPrice: 1000,
                },
            ],
            status: OrderStatusEnum.CANCELLED,
        },
        {
            _id: '60c72b2f9b1e8d3f4a8b4566',
            userId: '60c12b2f9b1e8d3f4c8b4564',
            offerId: '60c72b2f9b1e2d3f4c8a4567',
            discount: 180,
            amount: 600,
            finalAmount: 420,
            items: [
                {
                    productName: '60f7c2f9a2e8d3f4c8b99993',
                    quantity: 6,
                    price: 100,
                    totalPrice: 600,
                },
            ],
            status: OrderStatusEnum.PENDING,
        },
    ];

    await OrderSchema.deleteMany({
        _id: { $in: orders.map((order) => order._id) },
    });
    await OrderSchema.insertMany(orders);
    console.log('✅ Orders seeded successfully');
};
