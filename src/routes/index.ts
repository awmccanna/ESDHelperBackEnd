import express from 'express';
import { JobApplicationRoutes } from './job-application-routes';

const router = express.Router();

export const baseRoutes = (): express.Router => {
	console.log('Received request. Beginning routing.');
	JobApplicationRoutes(router);

	return router;
};