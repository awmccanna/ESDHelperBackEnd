import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import { baseRoutes } from './routes';

const app = express();

app.use(cors({
	credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(8080, () => {
	console.log('Server running on http://localhost:8080');
});

const MONGO_URL = 'mongodb+srv://awmccanna:9cUhobTBkNPUVUBH@cluster0.swjpojv.mongodb.net/?retryWrites=true&w=majority';

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', baseRoutes());