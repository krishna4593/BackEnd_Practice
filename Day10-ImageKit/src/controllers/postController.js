import imagekit from "../config/imagekit.js";
import {postModel} from "../modules/postSchema.js";

export const createPost=async(req,res)=>{
   try {
   const { caption }=req.body;
   if(!req.file || !caption){
    return res.status(400).json({
        success:false,
        message:"Image and caption are required"
    })
   }
   console.log(caption,req.file)
   const uploadResponse=await imagekit.upload({
    file: req.file.buffer,
    fileName: req.file.originalname,
    useUniqueFileName: true,
    folder: "/insta-clone"
   })
   const image=uploadResponse.url;
   console.log(image)
    const post = await postModel.create({caption, image});
    res.status(201).json({
        success:true,
        message:"Post created successfully",
        post
    })
    console.log(post)
}catch(err){
    res.status(500).json({
        success:false,
        message:"Error in creating post",
        err
    })
}
}

export const getAllPosts=async(req,res)=>{
    const posts=await postModel.find()
    res.status(200).json({
        success:true,
        message:"All posts fetched successfully",
        posts
    })
}