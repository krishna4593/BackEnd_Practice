import userModel from "../modules/user.model.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const registerController = async (req,res)=>{
    const {name, email, password}= req.body
  
    const isEmail =await userModel.findOne(email)
    if(isEmail){
      return  res.status(404).json({
            success:false,
            message:"email already exist"
        })}

     const hashed= bcrypt.hash(password, 10)
   const user =await userModel.create({name,email,password: hashed})
   const token = jwt.sign({
    userId: user._id
   },process.env.JWT_SECRET)

     res.status(201).json({
        success:true,
        message:"user created successfully",
        user:{
            name,
            email
        },
        token
     })

    
}

export const getMeController = async(req,res)=>{

    const user = req.user

    res.status(200).json({
        success:true,
        message:"user fetched sucessfully", 
        user
    })

}
export const loginController= async(req,res)=>{
    const {email, password}= req.body
    const user = await userModel.findOne(email)
    if(!user){
      return   res.status(404).json({
            success:false,
            messaage:"email not registered"
        })
   
    }
  const passwordMatch= bcrypt.compare(password, user.password)
  if(!passwordMatch){
  return  res.status(401).json({
    success:false,
    message:"password incorrect"
  })
  }
    const token = jwt.sign({
        userId: user._id
    }, process.env.JWT_SECRET)

    res.status(200).json({
        success:true,
        message:"logged in sucessfully",
        user:{
            name,
            email
        },
        token
    })
}
