import React from 'react';
import '../../App.css';

const RecipeCard = ({ url, title }) => {
	return (
		<div className='recipe-card'>
			<img src={url} className='recipe-image' alt=''></img>
			<div className='recipe-title'>{title}</div>
			<button className='recipe-btn'>See More</button>
		</div>
	);
};

export default RecipeCard;
