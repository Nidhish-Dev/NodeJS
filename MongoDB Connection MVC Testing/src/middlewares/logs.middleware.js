import fs from 'fs'

function logsFn(filename) {
  return (req, res, next) => { 
    fs.appendFile(filename, `${Date.now()}: ${req.method}: ${req.path}\n`, (err, data)=>{
        next();
    })
}
}

export {logsFn}