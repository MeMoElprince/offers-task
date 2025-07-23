import express from 'express';
import { AuthController } from './auth.controller';
import wrapperHandler from '../../common/util/wrapper-handler';

const router = express.Router();

router.post('/login', wrapperHandler(AuthController.login, 200));
router.post('/signup', wrapperHandler(AuthController.signup, 201));

export default router;
