import {app} from './app.js'
import dotenv from 'dotenv'
import urlRouter from './routes/url.route.js'
import {connectDB} from './db/connection.js'
import express from 'express'

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
app.listen(process.env.PORT, ()=>{
    console.log("Server Started ", process.env.PORT);
})
})
.catch((err)=>{
    console.log("error", err);
})


app.use("/Url", urlRouter)