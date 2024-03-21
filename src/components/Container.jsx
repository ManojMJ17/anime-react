import React from "react";
import "./Navbar.css";
import logo from "../images/Home/108.png";

const Container = () => {
	return (
		<div className="logo">
			<img src={logo} alt="" /> {/* Use the imported image */}
		</div>
	);
};

export default Container;
