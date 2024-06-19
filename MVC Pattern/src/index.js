import dotenv from 'dotenv'
import { app } from "./app.js";
import connectDB from './db/index.js'
import userRouter from './routes/user.route.js';

dotenv.config({
    path: './env'
})

connectDB(process.env.MONGODB_CONNECTION_URI)
.then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("Server Started at:", process.env.PORT);
})
})
.catch((err)=>{
console.log("error", err);
process.exit(1)
})


app.use("/api/users", userRouter);