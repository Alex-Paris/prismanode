import express, { Request, Response, NextFunction } from 'express';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
	console.log(err);

	return response.status(500).json({
		status: 'error',
		message: 'Internal server error'
	});
});

app.listen(3333, () => {
	console.log('👻 Buuu! Server started on port 3333!');
});
