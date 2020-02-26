import { Router } from 'express';
import UserController from './app/controllers/UserController';


const routes = new Router();

routes.post('/users', UserController.Store)


export default routes;
