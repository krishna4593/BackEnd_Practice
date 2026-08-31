import mongoose from 'mongoose';

const postSchema= new mongoose.Schema({
    caption:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }

},{timestamps:true})

export const postModel=mongoose.model("posts",postSchema);

