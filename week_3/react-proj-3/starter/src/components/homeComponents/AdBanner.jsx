import React from 'react';
import { Link } from 'react-router-dom';

const AdBanner = ({ title, content, id, url }) => {
	const display = () => {
		if (content) {
			return (
				<div
					id='ad-banner'
					style={{
						backgroundImage: `linear-gradient(190deg,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${url})`,
					}}
				>
					<div id='banner-content'>
						<h3>New Recipe</h3>
						<div id='banner-title'>{title}</div>
						<h3>{content}</h3>
						<Link to={`/recipe/${id}`}>
							<button className='blue-btn'>Check it out</button>
						</Link>
					</div>
				</div>
			);
		} else {
			return (
				<div
					id='ad-banner'
					style={{
						backgroundImage: `linear-gradient(190deg,rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${url})`,
					}}
				>
					<div id='banner-content-details'>
						<div id='banner-title'>{title}</div>
					</div>
				</div>
			);
		}
	};

	return display();
};

export default AdBanner;
