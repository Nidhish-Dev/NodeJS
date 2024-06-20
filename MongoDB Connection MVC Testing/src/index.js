import dotenv from 'dotenv'
import {app} from './app.js'
import {dbConnection} from './db/index.js'
import userRouter from './routes/user.route.js'
import contactRouter from './routes/contact.route.js'
//env config
dotenv.config({
    path: './env'
})

// db connection and listen the app
dbConnection()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
    console.log("Server Started at:", process.env.PORT);
})
})
.catch((err)=>{
console.log("Error", err);
process.exit(1)
})

app.use("/api/users", userRouter)
app.use("/api/contact", contactRouter)

