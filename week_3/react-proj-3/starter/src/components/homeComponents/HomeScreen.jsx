import { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import axios from 'axios';
import '../../App.css';
import RecipeCard from '../recipeComponents/RecipeCard';
import salmon from '../../assets/salmon.jpg';

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);

	const getData = async () => {
		const response = await axios.get('http://recipes.devmountain.com/recipes');

		console.log(filterRecipes(response.data));
		setRecipes(filterRecipes(response.data));
	};

	const filterRecipes = (recipes) => {
		let arr = [];

		return recipes.filter((recipe, index) => {
			while (index < 3) {
				if (recipe.image_url.startsWith('https')) {
					if (arr.includes(recipe.recipe_name)) {
						return false;
					} else {
						arr.push(recipe.recipe_name);
						return true;
					}
				}
			}
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<AdBanner />
			<div id='recipe-container'>
				{recipes.map((recipe, index) => {
					return (
						<RecipeCard
							key={recipe.recipe_name}
							title={recipe.recipe_name}
							url={recipe.image_url}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default HomeScreen;
