import { createJobApplication, getJobApplications } from "../db/job-applications";
import express from "express";

export const create = async (request: express.Request, response: express.Response) => {
	try {
		const { company, position, appliedDate, url } = request.body;

		const jobApp = await createJobApplication({
			company,
			position,
			appliedDate,
			url,
		});

		return response.status(200).json(jobApp).end();
	} catch (error) {
		console.log(error);
		response.sendStatus(400);
	}
}

export const get = async (request: express.Request, response: express.Response) => {
	try {
		const jobApplications = await getJobApplications();

		return response.status(200).json(jobApplications).end();
	} catch (error) {
		console.log(error);
		response.sendStatus(400);
	}
}