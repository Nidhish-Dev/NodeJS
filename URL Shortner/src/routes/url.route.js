import express from 'express'
import {handleGenerateNewShortUrl,handleRedirectUrl } from '../controllers/url.controller.js'

const router = express.Router()

router.post("/", handleGenerateNewShortUrl)
router.get("/:shortId", handleRedirectUrl)
export default router;