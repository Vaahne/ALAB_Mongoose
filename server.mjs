import express from 'express'
import dotenv from 'dotenv'
import globalError from './middleware/errorGlobal.mjs';
import connectDB from './db/conn.mjs';
import personRouter from './router/personRouter.mjs';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
connectDB();

// router
app.use('/api/person',personRouter);
// error handler
app.use(globalError);

// listener
app.listen(PORT,(req,res)=>{
    console.log(`Server connected to ${PORT}`);
});