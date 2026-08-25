const NotesModel = require("../models/NotesSchema");

const createNotesController=async(req,res)=>{
    const{title, description}= req.body;

    try{
        const notes =await NotesModel.create({title,description})
    res.status(201).json({
        success:true,
        message:"notes created successfully",
        notes
     })
    }
    catch(e){
        res.status(500).json({
            success:false,
            message:e.message,
         })
    }
}

const getAllNotesController= async(req,res)=>{
 try{
       const notes = await NotesModel.find()
       res.status(200).json({
        success:true,
        message:"notes fetched successfully",
        notes
       })
 }
 catch(e){
    res.status(500).json({
        success:false,
        message:e.message
    })
 }
    
}

const getNoteController= async(req,res)=>{
    try{
        const id = req.params._id
    const note = await NotesModel.findById(id,{ new: true })
    res.status(200).json({
        success:true,
        message:"note fetched successfully",
        note
    })
    }catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }


}


const updateNoteController= async(req,res)=>{
    try{
        const body= req.body
        const id = req.params._id
    const note = await NotesModel.findByIdAndUpdate(id, body,{ new: true })
    res.status(200).json({
        success:true,
        message:"note updated successfully",
        note
    })
    }catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }


}
const deleteNoteController= async(req,res)=>{
    try{
        const body= req.body
        const id = req.params._id
    const note = await NotesModel.findByIdAndDelete(id,{ new: true })
    res.status(200).json({
        success:true,
        message:"note deleted successfully",
        note
    })
    }catch(e){
        res.status(500).json({
            success:false,
            message:e.message
        })
    }


}

module.exports={
    createNotesController,
    getAllNotesController,
    getNoteController,
    updateNoteController,
    deleteNoteController
}