import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

function Home() {
	const [movie, setMovie] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetch = async () => {
		try {
			const movieData = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
				params: {
					type: "movie",
					filter: "bypopularity",
				},
			});
			setMovie(movieData.data.data);
		} catch (error) {
			setError("An error occurred while fetching data.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetch();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<>
			<div className="cards">
				{movie?.map((aboutMovies) => (
					<Card all={aboutMovies} key={aboutMovies.mal_id} />
				))}
			</div>
		</>
	);
}

export default Home;
