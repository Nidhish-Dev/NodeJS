import express from 'express'
const app = express()
import {logReqRes} from './middlewares/logs.middleware.js'

app.use(express.urlencoded({extended: false}))
app.use(logReqRes('logs.txt'))

export {app}