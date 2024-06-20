import express from 'express'
import {handleCreateNewContact, handleGetAllContacts} from '../controllers/contact.controller.js'

const router = express.Router();

router.route("/")
.post(handleCreateNewContact)
.get(handleGetAllContacts)

export default router;
