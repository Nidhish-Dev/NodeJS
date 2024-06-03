const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) =>{
    const logs = `${Date.now()}: New Request Recieved,\n`
    fs.appendFile("logs.txt", logs, (err,data)=>{
        res.end("hello from server")
    })
 
});


myServer.listen(8000, () => console.log("Server started"))

