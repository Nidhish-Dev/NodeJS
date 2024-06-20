import User from '../models/user.model.js'


async function handleGetAllUsers(req,res){
    const allDbusers =  await User.find({});
    return res.json(allDbusers)
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({error: "User not found"})
        return res.json(user)
}

async function handleUpdateUserById(req,res){
 await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
 return res.json({status:"Success"})
}

async function handleDeleteUserById(req,res){
 await User.findByIdAndDelete(req.params.id)
 return res.json({status:"Success"})
}

async function handleCreateNewUser(req,res){
    const body = req.body;
    const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
   });
   return res.status(201).json({msg:"Success", id: result._id})
}



export {handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser}