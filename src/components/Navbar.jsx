import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// Navbar component
const Navbar = () => {
	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/movies">Movies</Link>
				</li>
				<li>
					<Link to="/tv_series">Tv Series</Link>
				</li>
				<li>
					<Link to="/manga">Manga</Link>
				</li>
				<li>
					<Link to="/top_airing">Top Airing</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
