import React from "react";

const Header = ({ handleToggleClick }) => {
	return (
		<header className="header">
			<h1>Notes</h1>
			<button className="save" onClick={() => handleToggleClick(prevDarkMode => !prevDarkMode)}>
				Toggle Mode
			</button>
		</header>
	);
};

export default Header;
