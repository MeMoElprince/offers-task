import StoreSchema from '../../../modules/store/schema/store.schema';

export const seedStore = async () => {
    const stores = [
        {
            _id: '60c72b2f9b1e8d3f4c8b4568',
            name: 'Store One',
            description: 'Best store in town',
            location: {
                address: 'Next to the park',
                city: 'Cairo',
                state: 'Egypt',
                zipCode: '4511',
            },
            geoLocation: {
                type: 'Point',
                coordinates: [31.2357, 30.0444], // Cairo coordinates
                // first is the longitude, second is the latitude
            },
            contactNumber: '+201234556789',
            email: 'one@store.com',
        },
        {
            _id: '60c72b2f9b1e8d3f4c8b4569',
            name: 'Tech Haven',
            description: 'Your one-stop shop for electronics',
            location: {
                address: '12 Smart City Rd',
                city: 'Dubai',
                state: 'UAE',
                zipCode: '0001',
            },
            geoLocation: {
                type: 'Point',
                coordinates: [55.2708, 25.2048], // Dubai coordinates
            },
            contactNumber: '+971501234567',
            email: 'contact@techhaven.ae',
        },
        {
            _id: '60c72b2f9b1e8d3f4c8b4570',
            name: 'Fresh Mart',
            description: 'Organic groceries and more',
            location: {
                address: '78 Palm Street',
                city: 'Riyadh',
                state: 'Saudi Arabia',
                zipCode: '11564',
            },
            geoLocation: {
                type: 'Point',
                coordinates: [46.6753, 24.7136], // Riyadh coordinates
            },
            contactNumber: '+966555432100',
            email: 'info@freshmart.sa',
        },
        {
            _id: '60c72b2f9b1e8d3f4c8b4571',
            name: 'Gadget World',
            description: 'Latest tech and accessories',
            location: {
                address: '5 Silicon Valley Blvd',
                city: 'San Jose',
                state: 'USA',
                zipCode: '95134',
            },
            geoLocation: {
                type: 'Point',
                coordinates: [-121.8863, 37.3382], // San Jose coordinates
            },
            contactNumber: '+14085551234',
            email: 'hello@gadgetworld.com',
        },
    ];

    await StoreSchema.deleteMany({
        _id: { $in: stores.map((store) => store._id) },
    });
    await StoreSchema.insertMany(stores);
    console.log('✅ Stores seeded successfully');
};
