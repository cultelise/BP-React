import React from 'react';
import '../../App.css';

const RecipeInfo = ({ recipe }) => {
	console.log(recipe.ingredients);
	return (
		<div id='info-card'>
			<div id='info-title'>Recipe</div>
			<ul id='recipe-list'>
				<li className='recipe-item'>Prep Time: {recipe.prep_time}</li>
				<li className='recipe-item'>Cook Time: {recipe.cook_time}</li>
				<li className='recipe-item'>Serves: {recipe.serves}</li>
			</ul>
			<div id='ingredients-title'>Ingredients</div>
			<ul id='ingredients'>
				{recipe.ingredients &&
					recipe.ingredients.map((ingredient) => {
						return (
							<li key={ingredient.ingredient} className='ingredients-detail'>
								{ingredient.quantity} {ingredient.ingredient}
							</li>
						);
					})}
			</ul>
		</div>
	);
};

export default RecipeInfo;
