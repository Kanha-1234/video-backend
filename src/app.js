import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser"
const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


//middleware
app.use(express.json({limit:"32kb"}))
app.use(express.urlencoded({extended:true,limit:"32kb"}));
app.use(express.static("public"))
app.use(cookieParser())

//routes import

import userRouter from "./routes/user.routes.js"



//route declaration
app.use("/api/v1/users",userRouter)






export default app