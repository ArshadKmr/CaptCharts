import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';




if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}


const app = express();
const port = 5000

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173',
}))

app.use(express.json({ limit: '100mb' }));
app.use(express.urlencoded({ limit: '100mb', extended: true }));


app.use('/', userRoute)

app.listen(port, () => { console.log(`listening on port ${port}`); });
connectDB()
