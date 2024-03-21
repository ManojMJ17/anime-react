import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

function Tvseries() {
	const [anime, setAnime] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetch = async () => {
		try {
			const data = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
				params: {
					type: "tv_special",
					filter: "bypopularity",
				},
			});
			setAnime(data.data.data);
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
				{anime?.map((naruto) => (
					<Card all={naruto} key={naruto.mal_id} />
				))}
			</div>
		</>
	);
}

export default Tvseries;
