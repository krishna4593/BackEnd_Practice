const mongoose = require("mongoose");

const NotesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        minLength:10
    }
})
const NotesModel = mongoose.model("Notes", NotesSchema);

module.exports = NotesModel