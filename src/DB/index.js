import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionBD = async()=>{
    try{
const  connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n mongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

export default connectionBD