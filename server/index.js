
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/', Router);


const PORT = 8000;

Connection(); // no need to pass USERNAME and PASSWORD

app.listen(PORT, () => {
  console.log(`🚀 Server is running on PORT ${PORT}`);
});
