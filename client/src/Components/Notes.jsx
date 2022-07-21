import React from "react";
import NewNote from "./NewNote";
import { Note } from "./Note";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { loadNotes } from "../redux/notes";
const Notes = () => {
	const dispatch = useDispatch();
	const { notes, status } = useSelector(state => state.notes || state.status);
	useEffect(() => {
		axios.get(`http://localhost:3001/api/v1/getnotes`).then(data => {
			dispatch(loadNotes(data.data.data));
		});
	}, [status]);
	const notesComponent = notes.map(note => {
		return <Note key={note._id} {...note} />;
	});
	return (
		<div className="notes-list">
			{notesComponent}
			<NewNote />
		</div>
	);
};

export default Notes;
