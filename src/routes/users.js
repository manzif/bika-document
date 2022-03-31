import express from 'express';
import UsersManager from '../controllers/users/users';

const route = express.Router();

route.post('/signup', UsersManager.signUp);
route.post('/login', UsersManager.login);

export default route;
