import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

import { connection } from './db/connection.js';


dotenv.config();
const app = express();

try {
    connection();
} catch (error) {
    console.log("Error: ", error);
}


app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send({
        statusCode: 200,
        succeded: true,
        message: 'Anasayfa',

    })
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server ${process.env.PORT} adresinden çalışmaya başladı. http://localhost:${process.env.PORT}/`)
})