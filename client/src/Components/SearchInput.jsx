import React from "react";
import { MdSearch } from "react-icons/md";
const SearchInput = () => {
	return (
		<div className="search">
			<MdSearch className="search-icons" size="1.3em" />
			<input type="text" placeholder="type to search..." />
		</div>
	);
};

export default SearchInput;
