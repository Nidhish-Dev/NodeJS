const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        mongoose.connect("mongodb://localhost:27017/Blogify")
        console.log("DB connected");
    } catch (error) {
        console.log("Error in db connection", error);
    }
}

module.exports = connectDB;