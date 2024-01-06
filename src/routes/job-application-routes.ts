import express from 'express';
import { create, get } from '../controllers/job-application-controller';

export const JobApplicationRoutes = (router: express.Router) => {
	router.get('/jobApps', get);
	router.post('/create', create);
} 