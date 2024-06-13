const express = require('express');
const app = express();
const Jokes = require('./jokes')
//home route
app.get("/", (req,res)=>{
    res.send("Welcome to server!");
})

//jokes routes
app.get("/api/jokes", (req,res)=>{
res.send(Jokes.jokes);
})

//port
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server started at port ${port} http://localhost:3000/`);
})