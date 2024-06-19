import fs from 'fs'

function logReqRes(filename){
    return (req,res,next) =>{
 fs.appendFile(filename, `${Date.now()}: ${req.method}: ${req.path}\n`, (err, data)=>{
    next();
 })
    } 
}

export {logReqRes}