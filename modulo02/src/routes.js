import { Router } from 'express';
import multer from 'multer';
import multerconfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middleware/auth'
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController'
import ScheduleController from './app/controllers/ScheduleController'
import Appointment from './app/models/Appointment';

const routes = new Router();
const upload = multer(multerconfig)

routes.post('/users', UserController.Store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware);

routes.put('/users', UserController.update)

routes.get('/providers', ProviderController.index)

routes.get('/Appointment', AppointmentController.index)

routes.post('/Appointment', AppointmentController.store)

routes.get('/schedule', ScheduleController.index)

routes.post('/files', upload.single('file'), FileController.store)


export default routes;
