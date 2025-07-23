// src/startup/seeder/index.ts
import mongoConnect from '../mongodb';
import { seedUser } from './user.seed';
import { seedOffer } from './offer.seed'; // if any
import { seedStore } from './store.seed';
import { seedOrder } from './order.seed';

const seed = async () => {
    try {
        await mongoConnect();
        console.log('🔗 MongoDB connected');

        await seedUser();
        await seedStore();
        await seedOffer();
        await seedOrder();

        console.log('✅ Seeding completed');
        process.exit(0);
    } catch (err) {
        console.error('❌ Seeding failed:', err);
        process.exit(1);
    }
};

seed();
