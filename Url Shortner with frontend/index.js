const express = require('express')
const path = require('path')
const {connectDB} = require('./db/connection')
const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/staticRouter")
const URL = require("./models/url.model");
const app = express();
const PORT = 8000;

connectDB()
.then(()=>console.log("DB Connected"))
.catch(()=>console.log("error in connecting db"))

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/url", urlRoute);
app.use("/", staticRoute)
app.listen(PORT, ()=>{
    console.log("Server Started at PORT:", PORT);
})