const express = require('express');
const connectDB = require('./config/DB');
const NotesModel = require('./models/notes.model');
const app = express();
app.use(express.json());
connectDB();

app.post('/notes', async (req, res) => {
    let {title,description} = req.body;
    const newNote = await NotesModel.create({title,description});
    res.status(201).json({message:"Note created successfully",newNote});

});
module.exports = app;