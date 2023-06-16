import React from 'react';
import '../../App.css';

const RecipeInstructions = ({ recipe }) => {
	console.log(recipe);
	return (
		<div id='instructions-card'>
			<div id='instructions-title'>Instructions</div>
			<p id='instructions-content' style={{ whiteSpace: 'pre-wrap' }}>
				{recipe.instructions && JSON.parse(recipe.instructions)}
			</p>
		</div>
	);
};

export default RecipeInstructions;
