import mongoose from "mongoose";
import connectionBD from "./DB/index.js";
import dotenv from "dotenv";

dotenv.config({

})

console.log(process.env.MONGODB_URI)
//db connection call
connectionBD()






























// ;(()=>async()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     }
//     catch(err){
//         console.log(err)
//     }
// })() 