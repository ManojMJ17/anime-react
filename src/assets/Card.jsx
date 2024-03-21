import React from "react";

const Card = ({ all }) => {
	return (
		<a href={all.url} target="_blank" rel="noopener noreferrer">
			<div className="card">
				<div className="cardImg">
					<img src={all.images.jpg.large_image_url} alt="" />
				</div>
				<h1>{all.title_english}</h1>
			</div>
		</a>
	);
};

export default Card;
