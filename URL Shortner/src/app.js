import express from 'express'
// import URL from './models/url.model.js'
const app = express();
app.use(express.json())
// app.get("/:shortId", async (req,res)=>{
// const shortId = req.params.shortId
//    const entry =  await URL.findOneAndUpdate({shortId})
//     res.redirect(entry.redirectURL)
// })
export {app}