import mongoose from "mongoose";

const JobAppSchema = new mongoose.Schema({
	company: { type: String, },
	position: { type: String },
	appliedDate: { type: Date },
	url: { type: String },
});

export const JobAppModel = mongoose.model('JobApplication', JobAppSchema);

export const getJobApplications = () => JobAppModel.find();

export const createJobApplication = (values: Record<string, any>) => new JobAppModel(values).save().then((user) => user.toObject());