import express from 'express';
import UsersManager from '../controllers/users';

const route = express.Router();

route.get('/signup', UsersManager.Signup);

export default route;
