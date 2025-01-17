import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

// Define the type for a movie
interface Anime {
	mal_id: number;
	title_english: string;
	images: {
		jpg: {
			large_image_url: string;
		};
	};
	// Add other properties if needed
}

function Topairing() {
	const [anime, setAnime] = useState<Anime[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetch = async () => {
		try {
			const data = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
				params: {
					filter: "airing",
					rating: "PG13",
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

export default Topairing;
