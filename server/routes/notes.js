const express = require("express");
const router = express.Router();
const { addNote, getNotes, deleteNote, getCustomNotes } = require("../controllers/notes");
router.route("/getnotes").get(getNotes).post(getCustomNotes);
router.route("/note").post(addNote);
router.route("/note/:id").delete(deleteNote);
module.exports = router;
