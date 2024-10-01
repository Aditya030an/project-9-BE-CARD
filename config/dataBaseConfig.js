import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:".env",
})

const dataBaseConfig = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MongoDb connect seccessfully");
    }).catch((error)=>{
        console.log("Error in mongoDb connction" , error)
    })
}

export default dataBaseConfig;