import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    phNumber:{
        type: Number,
        unique:true,
        required:true,
    }

}, {timestamps:true})

const Contact =  mongoose.model('Contact', contactSchema)

export default Contact;