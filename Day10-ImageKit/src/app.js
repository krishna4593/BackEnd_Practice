import express from 'express';

import connectDB from './config/DB.js';
import router from './routes/postRoute.js';

const app = express();
app.use(express.json());

connectDB();

app.use("/post",router);
export default app;