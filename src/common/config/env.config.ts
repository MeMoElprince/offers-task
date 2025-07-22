import { EnvironmentEnum } from '../enum/env.enum';

export const environment: EnvironmentEnum =
    (process.env.NODE_ENV as EnvironmentEnum) || EnvironmentEnum.DEVELOPMENT;
export const isProduction = environment === EnvironmentEnum.PRODUCTION;
type Env_Var_Type = {
    environment: EnvironmentEnum;
    baseUrl: string;
    frontUrl: string;
    port: string | number;
    jwtSecret: string;
    jwtExpiration: string;
    emailHost: string;
    emailPort: string | number;
    email: string;
    emailPassword: string;
    MONGO_URI: string;
};

const config: Record<EnvironmentEnum, Env_Var_Type> = {
    [EnvironmentEnum.DEVELOPMENT]: {
        environment: EnvironmentEnum.DEVELOPMENT,
        MONGO_URI:
            process.env.MONGO_URI_DEV ||
            'mongodb://localhost:27017/offer-task-dev',
        baseUrl: process.env.BASE_URL_DEV || 'http://localhost:3000',
        frontUrl: process.env.FRONT_URL_DEV || 'http://localhost:5432',
        port: process.env.PORT || 3000,
        jwtSecret: process.env.JWT_SECRET || '',
        jwtExpiration: process.env.JWT_EXPIRATION || '1d',
        emailHost: process.env.EMAIL_HOST || '',
        emailPort: process.env.EMAIL_PORT || 587,
        email: process.env.EMAIL || '',
        emailPassword: process.env.EMAIL_PASSWORD || '',
    },
    [EnvironmentEnum.TEST]: {
        environment: EnvironmentEnum.TEST,
        baseUrl: process.env.BASE_URL_TEST || 'http://localhost:3000',
        MONGO_URI:
            process.env.MONGO_URI_TEST ||
            'mongodb://localhost:27017/offer-task-test',
        frontUrl: process.env.FRONT_URL_TEST || 'http://localhost:5432',
        port: process.env.PORT || 3000,
        jwtSecret: process.env.JWT_SECRET || '',
        jwtExpiration: process.env.JWT_EXPIRATION || '1d',
        emailHost: process.env.EMAIL_HOST || '',
        emailPort: process.env.EMAIL_PORT || 587,
        email: process.env.EMAIL || '',
        emailPassword: process.env.EMAIL_PASSWORD || '',
    },
    [EnvironmentEnum.PRODUCTION]: {
        environment: EnvironmentEnum.PRODUCTION,
        baseUrl: process.env.BASE_URL_PROD || '',
        MONGO_URI:
            process.env.MONGO_URI_PROD ||
            'mongodb://localhost:27017/offer-task',
        frontUrl: process.env.FRONT_URL_PROD || '',
        port: process.env.PORT || 3000,
        jwtSecret: process.env.JWT_SECRET || '',
        jwtExpiration: process.env.JWT_EXPIRATION || '1d',
        emailHost: process.env.EMAIL_HOST || '',
        emailPort: process.env.EMAIL_PORT || 587,
        email: process.env.EMAIL || '',
        emailPassword: process.env.EMAIL_PASSWORD || '',
    },
};

export const ENV_VARIABLES: Env_Var_Type = config[environment];
