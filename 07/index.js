const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 3000;
const users = require('./MOCK_DATA.json')


//Middleware
app.use(express.urlencoded({extended: false}))

app.use((req, res, next) => {
    const logs = `${Date.now()}: ${req.method}: ${req.path}\n`
    console.log(logs);
fs.appendFile('log.txt',logs ,(err, data)=>{
})
next();
})

//Routes
app.get("/", (req, res)=>{
    res.send("Server Started")
})

//GET
app.get("/api/users", (req, res)=>{
    return res.json(users)
})
//POST
app.post("/api/users", (req, res)=>{
    const body = req.body;
    users.push({id: users.length + 1,...body});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
     return res.json({status: "Success", id: users.length})
    })
})

//3 ROUTES
app.route("/api/users/:id")
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id === id)
    return res.json(user)
})

.patch((req,res)=>{
 const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
        const updatedUser = {...users[userIndex], ...body};
        users[userIndex] = updatedUser;
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
           return res.json({status: "Success", updatedUser});
        })        
    } else {
        return res.status(404).json({status: "Failure", message: "User not found"});
    }
})
.delete((req,res)=>{
 const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
            return res.json({status: "Success", message: "User deleted"});
        })    
    } else {
        return res.status(404).json({status: "Failure", message: "User not found"});
    }
})

app.listen(PORT, ()=>{
    console.log(`Server Started at: http://localhost:3000/`);
})
