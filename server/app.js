import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import { connection } from './db/connection.js';
import router from './routes/foodRoutes.js';


dotenv.config();
const app = express();

try {
    connection();
} catch (error) {
    console.log("Error: ", error);
}


app.use(cors());

app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server ${process.env.PORT} adresinden çalışmaya başladı. http://localhost:${process.env.PORT}/`)
})