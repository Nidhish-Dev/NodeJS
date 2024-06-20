import express from 'express'
import {logsFn} from './middlewares/logs.middleware.js'
const app = express();

app.use(express.urlencoded({extended:false}))
app.use(logsFn("logs.txt"))

export {app}