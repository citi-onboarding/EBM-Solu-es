import express from 'express';
import UserController from '@controllers/UserController'
import ImageController from '@controllers/ImageController';
import ServiceController from '@controllers/ServiceController'
import { SendMail } from '@controllers/MailController';

const routes = express.Router();
const serviceController = new ServiceController();
const userController = new UserController();
const imageController = new ImageController();

routes.post('/image', imageController.create);
routes.get('/image', imageController.get);
routes.delete('/image/:id', imageController.delete);
routes.put('/image/:id', imageController.update);

routes.post('/service', serviceController.create)
routes.get('/service', serviceController.get);
routes.delete('/service/:id', serviceController.delete);
routes.put('/service/:id', serviceController.update);

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/email', SendMail)

export default routes;
