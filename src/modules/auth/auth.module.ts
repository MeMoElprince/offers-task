import express from 'express';
import { AuthController } from './auth.controller';
import wrapperHandler from '../../common/util/wrapper-handler';
import { AuthMiddleware } from './middleware/auth.middleware';

const router = express.Router();

router.post('/login', wrapperHandler(AuthController.login, 200));
router.post('/signup', wrapperHandler(AuthController.signup, 201));
router.post('/refresh-token', wrapperHandler(AuthController.refreshToken, 200));

export default router;
