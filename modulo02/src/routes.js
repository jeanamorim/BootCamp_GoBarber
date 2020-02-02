import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import FileController from './app/controllers/FileControllers';
import AppointmentController from './app/controllers/AppointmentController ';
import ProviderController from './app/controllers/ProviderController ';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.put('/update', authMiddleware, UserController.update);

routes.get('/providers', ProviderController.index);
routes.post('/appointments', AppointmentController.store);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
