import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import SearchInput from "./Components/SearchInput";
const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<div className={`${darkMode && "dark-mode"}`}>
			<div className="container">
				<Header handleToggleClick={setDarkMode} />
				<SearchInput />
				<Notes />
			</div>
		</div>
	);
};

export default App;
