import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import '../../App.css';

const RecipeCard = ({ url, title, id }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/recipe/${id}`);
	};

	return (
		<div className='recipe-card'>
			<img src={url} className='recipe-image' alt=''></img>
			<div className='recipe-title'>{title}</div>
			<button className='recipe-btn' onClick={handleClick}>
				See More
			</button>
		</div>
	);
};

export default RecipeCard;
