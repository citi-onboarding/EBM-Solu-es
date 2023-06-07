import express from 'express';
import UserController from '@controllers/UserController'
import ImageController from '@controllers/ImageController';

const routes = express.Router();
const userController = new UserController();
const imageController = new ImageController();

routes.post('/image', imageController.create);
routes.get('/image', imageController.get);
routes.delete('/image/:id', imageController.delete);
routes.put('/image/:id', imageController.update);

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

export default routes;