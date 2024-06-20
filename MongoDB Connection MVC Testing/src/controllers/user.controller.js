import User from '../models/user.model.js'

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req,res){
 
    const user = await User.findById(req.params.id)
    if(!user) return res.json({msg:"No user Found"})
        return res.json(user)

}

async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id, {lastName:"Changed"})
    return res.json({status:"User Upadted"})
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"User Deleted"})
}
async function handleCreateNewUser(req,res){
    const body = req.body;
    const result = await User.create({
        firstName:body.first_name,
        lastName:body.last_name,
        email:body.email,
        gender:body.gender,
    });
    return res.status(201).json({status:"User Created", id:result._id})
}


export {handleGetAllUsers,handleGetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser}