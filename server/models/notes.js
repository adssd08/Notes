const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
	data: {
		type: String,
		required: [true, "Data must be provided"],
		trim: true,
		maxLength: [200, "Cannot be longe than 200 characters"],
	},
	date: {
		type: String,
		default: new Date().toLocaleDateString(),
	},
});
module.exports = mongoose.model("Notes", NoteSchema);
