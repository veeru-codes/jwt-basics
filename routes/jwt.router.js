import express from 'express';
import { dashboard, login } from '../controllers/main.js';
import auth from '../middleware/auth.js';

const jwtRouter = express.Router();

jwtRouter.route('/login').post(login);
jwtRouter.route('/dashboard').get(auth, dashboard);

export default jwtRouter;
