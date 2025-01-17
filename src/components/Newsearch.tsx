import React, { useState } from "react";
import "./Navbar.css";

const Newsearch = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = () => {
		console.log("Searching for:", inputValue);
	};

	return <input type="text" />;
};

export default Newsearch;
