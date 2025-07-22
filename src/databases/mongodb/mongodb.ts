import { connect } from 'mongoose';
import { ENV_VARIABLES } from '../../common/config/env.config';

export default async function mongooseConnect(): Promise<void> {
    const mongoDBURI = ENV_VARIABLES.MONGO_URI ?? 'mongodb://localhost:27017';
    const connection = await connect(mongoDBURI);
    if (connection)
        console.log(`MongoDB connected successfully on: ${mongoDBURI}`);
    else console.error(`Failed to connect to MongoDB at ${mongoDBURI}`);
}
