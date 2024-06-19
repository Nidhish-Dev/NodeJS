import mongoose from "mongoose";

async function connectDB(url){
 mongoose.connect(url)
return console.log("MongoDB Connected");
}


export default connectDB