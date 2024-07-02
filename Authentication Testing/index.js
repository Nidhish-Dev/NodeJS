const express = require('express')
require('dotenv').config();
const path = require('path')
const connectDB = require('./db/connection')

const userRoute = require('./routes/user.route')
const staticRoute = require("./routes/staticRouter")
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use("/user", userRoute)
app.use("/", staticRoute)
app.listen(process.env.PORT,()=>console.log("server started at PORT:", process.env.PORT))