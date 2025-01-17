import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";

const Search = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = () => {
		console.log("Searching for:", inputValue);
	};

	return (
		<>
			<div className="search">
				<div className="searchbox">
					<input
						type="text"
						placeholder="Search anime..."
						onChange={handleChange}
						value={inputValue}
					/>
				</div>
				<div className="submit">
					<button type="button" onClick={handleSubmit}>
						<i>
							<FaSearch className="search-icon" size="20px" />
						</i>
					</button>
				</div>
			</div>
			<div className="clearfix">
				<p>
					Top search: One PieceSolo LevelingNinja KamuiNaruto:
					ShippudenClassroom of the Elite IIIJujutsu Kaisen 2nd SeasonOverflow
					(Uncensored)Mashle: Magic and Muscles Season 2Boruto: Naruto Next
					GenerationsNaruto
				</p>
			</div>
		</>
	);
};

export default Search;
