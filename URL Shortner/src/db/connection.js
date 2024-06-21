import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect("mongodb://localhost:27017/url-shortner")
        console.log("DB Connected");
    } catch (error) {
        console.log("Error in connecting DB", error);
    }
}

export {connectDB}