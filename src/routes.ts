import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();
const userController = new UserController();

routes.get('/', (req, res) => {
	return res.json({ hello: 'World' });
})

routes.get('/users', userController.index);
routes.post('/users', userController.store);

export default routes;