import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/notes";
import axios from "axios";
//http://localhost:3001/api/v1/tasks/${id}
const NewNote = () => {
	const [data, setData] = useState("");
	const dispatch = useDispatch();
	const handleDataChange = event => {
		setData(event.target.value);
	};
	const handleSaveClick = event => {
		axios
			.post(`http://localhost:3001/api/v1/note`, {
				data,
			})
			.then(() => {
				dispatch(changeStatus());
				setData("");
			});
	};
	let remainingCharacters = 200 - data.length;
	return (
		<div className="note new">
			<textarea rows="8" cols="10" placeholder="Type to add a note..." value={data} onChange={handleDataChange} maxLength={200}></textarea>
			<div className="note-footer">
				<small>{remainingCharacters} Remaining</small>
				<button className="save" onClick={handleSaveClick}>
					Save
				</button>
			</div>
		</div>
	);
};

export default NewNote;
