const mongoose = require('mongoose');

let notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true},

    description: {
        type: String,
        required: true},

})

const NotesModel= mongoose.model('Notes', notesSchema);

module.exports = NotesModel;