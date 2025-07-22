import { Express } from 'express';
import mongooseConnect from '../databases/mongodb/mongodb';

const appSetup = async (app: Express) => {
    try {
        const PORT = process.env.PORT || 3000;

        await Promise.all([mongooseConnect()]);

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Error during app setup:', err);
    }
};

export default appSetup;
