import mongoose from "mongoose";

async function dbConnection(){
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
    console.log("Connected to MongoDb");
} catch (error) {
    console.log("Error in Connecting DB", error);
}
}


export{dbConnection}