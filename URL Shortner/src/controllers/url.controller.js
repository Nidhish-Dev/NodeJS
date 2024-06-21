import URL from '../models/url.model.js'
import { nanoid } from 'nanoid'

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body) return res.status(400).json({error:"url is required"})
        const shortID = nanoid(8)
    await URL.create({
        shortID: shortID,
        redirectURL:body.url,
        visitHistory:[]
    })
    return res.json({id:shortID})
}

async function handleRedirectUrl(req,res){
   const shortId = req.params.shortId
   const entry =  await URL.findOneAndUpdate({shortId},
    
   )
    res.redirect(entry.redirectURL)
}

export {handleGenerateNewShortUrl, handleRedirectUrl}