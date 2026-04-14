import mongoose from "mongoose";
const connectDb = async() =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL )
        console.log("db connect successfully")
        
    } catch (err) {
        console.log("db error")
        
    }
}

export  default connectDb;