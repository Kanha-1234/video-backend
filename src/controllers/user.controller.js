import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import  User  from "../models/user.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js";
//import apiResponse from "../utils/apiResponse.js";
 const registerUser = asyncHandler(async(req,res)=>{
     const{fullName,email,userName,password}=req.body
    if(!fullName || !email || !userName || password){
          return res.status(400).json({
            msg:"something is missing",
            success:false
          })
    }
    let user =await User.findOne({
        $or:[{userName},{email}]
    })
    if(user){
       throw new  apiError(409,"user already exit")
    }
 
     const avtarLocalPath =  req.files?.avtar[0]?.path;
     const coverImageLocalPath = req.files?.coverImage[0]?.path;
     if(!avtarLocalPath){
        throw new apiError(400,"avtar file required")
     }

     const avtar =  await uploadOnCloudinary(avtarLocalPath)
     const coverImage =  await uploadOnCloudinary(coverImageLocalPath)
     
     if(!avtar){
        throw new apiError(400,"avtar file required")
     }


     user = await  User.create({
        fullName,
        avtar:avtar.url,
        coverImage:coverImage?.url || "",
        email,
        password,
        userName:userName.toLowerCase()
     })

    const newUser =  await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(newUser){
        throw new apiError(500, "something went wrong register user")
    }

    return res.status(201).json({
         msg:"user register successfully",
         success:true
    })
})

export default registerUser