import appSetup from './startup/init';
import express from 'express';
import securitySetup from './startup/security';
import routerSetup from './startup/router';

const app = express();

appSetup(app);
securitySetup(app, express);
routerSetup(app);
