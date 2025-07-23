import { config } from 'dotenv';
import 'reflect-metadata'; // Import reflect-metadata for TypeORM decorators

config({
    path: '.env', // Specify the path to your .env file
    quiet: true, // Suppress logging of the loaded variables
}); // Load environment variables from .env file

import appSetup from './startup/init';
import express from 'express';
import securitySetup from './startup/security';
import routerSetup from './startup/router';

const app = express();

appSetup(app);
securitySetup(app, express);
routerSetup(app);
