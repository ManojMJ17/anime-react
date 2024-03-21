import React from "react";
import "./Navbar.css";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Finalbutton = () => {
	return (
		<div className="last">
			<Link to="/content_page" className="site">
				View Full Site
				<li>
					<FaArrowCircleRight />
				</li>
			</Link>
		</div>
	);
};

export default Finalbutton;
