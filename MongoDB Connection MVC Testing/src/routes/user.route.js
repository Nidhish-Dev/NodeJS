import express from 'express'
const router = express.Router();
import {handleGetAllUsers,handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser} from '../controllers/user.controller.js'


router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser)

router.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById)

export default router;