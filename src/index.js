import mongoose from "mongoose";
import connectionBD from "./DB/index.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config({

})

console.log(process.env.MONGODB_URI)
//db connection call
connectionBD()
.then(()=>{
 app.listen(process.env.PORT || 8001,()=>{
    console.log(`server listen on port ${process.env.PORT || 8001}`)
 } )
})
.catch((err)=>{
    console.log("db connection failed" + err)
})





























// ;(()=>async()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//     }
//     catch(err){
//         console.log(err)
//     }
// })() 