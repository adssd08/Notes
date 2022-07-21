const Notes = require("../models/notes");
const getNotes = (req, res) => {
	Notes.find({})
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			res.status(404).json({ msg: err });
		});
};
const addNote = (req, res) => {
	Notes.create(req.body)
		.then(data => {
			res.status(201).json({ data: data });
		})
		.catch(err => {
			res.status(500).json({ msg: err });
		});
};
const deleteNote = (req, res) => {
	Notes.deleteOne({ _id: req.params.id })
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			res.status(404).json({ msg: err });
		});
};
const getCustomNotes = (req, res) => {
	const regExp = new RegExp(req.body.data);
	Notes.find({ data: { $regex: regExp, $options: "g" } })
		.then(data => {
			res.status(200).json({ data: data });
		})
		.catch(err => {
			res.status(404).json({ msg: err });
		});
};
module.exports = { addNote, getNotes, deleteNote, getCustomNotes };
