const express = require("express");
const router = express.Router();
const { addNote, getNotes, deleteNote } = require("../controllers/notes");
router.route("/note").get(getNotes).post(addNote);
router.route("/note/:id").delete(deleteNote);

module.exports = router;
