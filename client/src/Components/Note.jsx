import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeStatus } from "../redux/notes";
import axios from "axios";
export const Note = props => {
	const dispatch = useDispatch();
	const handleDeleteClick = () => {
		axios.delete(`http://localhost:3001/api/v1/note/${props._id}`).then(() => {
			dispatch(changeStatus());
		});
	};
	return (
		<div className="note">
			<span>{props.data}</span>
			<div className="note-footer">
				<small>{props.date}</small>
				<MdDeleteForever className="delete-icon" size="1.3em" onClick={handleDeleteClick} />
			</div>
		</div>
	);
};
