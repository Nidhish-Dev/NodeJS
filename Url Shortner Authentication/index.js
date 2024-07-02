const express = require('express')
const path = require('path')
const {connectDB} = require('./db/connection')
const cookieParser = require('cookie-parser')
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth.middleware')
const URL = require("./models/url.model");
const app = express();
const PORT = 8000;


const urlRoute = require("./routes/url.route");
const staticRoute = require("./routes/staticRouter")
const userRoute = require("./routes/user.route")
connectDB()
.then(()=>console.log("DB Connected"))
.catch(()=>console.log("error in connecting db"))

app.set('views', path.join(__dirname, 'views'));
// Set the view engine
app.set('view engine', 'ejs'); // or 'pug', 'hbs', etc.

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use("/url",restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/",checkAuth, staticRoute)
app.listen(PORT, ()=>{
    console.log("Server Started at PORT:", PORT);
})