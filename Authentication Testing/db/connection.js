const mongoose = require('mongoose')

const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
        console.log("DB Connected");
    } catch (error) {
        console.log("Error in Connection", error);
    }
    
}

module.exports = connectDB;