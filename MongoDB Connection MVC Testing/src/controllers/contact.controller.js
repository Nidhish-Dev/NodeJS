import Contact from '../models/contact.model.js'

async function handleCreateNewContact(req,res){
    const body = req.body;
    const result = await Contact.create({
        name:body.name,
        phNumber:body.phone_number,
    })
    return res.status(201).json({status:"Contact Created", id:result._id})
}
async function handleGetAllContacts(req,res){
    const allContacts = await Contact.find({})
    return res.json(allContacts)
}

export {handleCreateNewContact, handleGetAllContacts}