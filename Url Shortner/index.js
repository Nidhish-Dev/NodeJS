const express = require('express')
const {connectDB} = require('./db/connection')
const urlRoute = require("./routes/url.route");
const URL = require("./models/url.model");
const app = express();
const PORT = 8000;

connectDB()
.then(()=>console.log("DB Connected"))
.catch(()=>console.log("error in connecting db"))

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, ()=>{
    console.log("Server Started at PORT:", PORT);
})