const express = require("express");
const { createNotesController, getAllNotesController, getNoteController, updateNoteController, deleteNoteController } = require("../controllers/notesController");

const router= express.Router();

router.post("/create",createNotesController )
router.get("/getNotes",getAllNotesController)
router.get("/:id",getNoteController)
router.put("/:id",updateNoteController)
router.delete("/:id",deleteNoteController)
module.exports=router