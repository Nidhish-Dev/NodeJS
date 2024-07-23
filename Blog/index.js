const express = require('express')
const path = require('path')
const app = express();
const PORT = 8000;
const connectDB = require('./db/connection')
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const cookieParser = require('cookie-parser');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const Blog = require('./models/blog')
connectDB();


app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie("token"))
app.use(express.static(path.resolve('./public')))

app.get("/", async(req,res)=>{
    const allBlogs = await Blog.find({})
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    })
})

app.use("/user", userRoute)
app.use("/blog", blogRoute)

app.listen(PORT, ()=>{
    console.log("server started at PORT", PORT);
})