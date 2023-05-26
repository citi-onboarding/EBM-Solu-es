import express from 'express';
import UserController from '@controllers/UserController'

const routes = express.Router();
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/image', imageController.create);
routes.get('/image', imageController.get);
routes.delete('/image/:id', imageController.delete);
routes.put('/image/:id', imageController.update);

export default routes;
