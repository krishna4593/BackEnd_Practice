const express = require("express");
const { createNotesController, getAllNotesController, getNoteController, updateNoteController, deleteNoteController, updateSingleNoteController } = require("../controllers/notesController");

const router= express.Router();

router.post("/create",createNotesController )
router.get("/getNotes",getAllNotesController)
router.get("/:id",getNoteController)
router.put("/:id",updateNoteController)
router.patch("/:id/single",updateSingleNoteController)
router.delete("/:id",deleteNoteController)
module.exports=router