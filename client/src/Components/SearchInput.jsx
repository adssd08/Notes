import axios from "axios";
import React from "react";
import { MdSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { customLoadNotes } from "../redux/notes";
const SearchInput = () => {
	const dispatch = useDispatch();
	const { search } = useSelector(state => state.notes);
	const handleInputChange = event => {
		const value = event.target.value;
		axios
			.post(`http://localhost:3001/api/v1/getnotes`, {
				data: event.target.value,
			})
			.then(data => {
				dispatch(customLoadNotes({ value: value, data: data.data.data }));
			});
	};
	return (
		<div className="search">
			<MdSearch className="search-icons" size="1.3em" />
			<input type="text" placeholder="type to search..." value={search} onChange={handleInputChange} />
		</div>
	);
};

export default SearchInput;
