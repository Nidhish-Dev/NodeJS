const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/url-shortner")
    } catch (error) {
        console.log("Error in connection", error);
    }
}

module.exports= {
connectDB,
}