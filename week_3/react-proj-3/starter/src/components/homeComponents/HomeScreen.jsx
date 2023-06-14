import { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import axios from 'axios';
import '../../App.css';
import RecipeCard from '../recipeComponents/RecipeCard';
import { BiSearchAlt2 } from 'react-icons/bi';
const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	const getData = async () => {
		const response = await axios.get('http://recipes.devmountain.com/recipes');

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

	const searchRecipes = () => {
		return recipes.map((recipe, index) => {
			if (
				recipe.recipe_name.toLowerCase().includes(searchInput.toLowerCase())
			) {
				return (
					<RecipeCard
						key={recipe.recipe_name}
						title={recipe.recipe_name}
						url={recipe.image_url}
					/>
				);
			}
		});
	};

	const searchHandler = (event) => {
		console.log(event.target.value);
		setSearchInput(event.target.value);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<AdBanner />
			<main>
				<div id='search-container'>
					<BiSearchAlt2 style={{ color: '#D96D19' }}></BiSearchAlt2>
					<label htmlFor='search-bar'></label>
					<input
						type='text'
						id='search-bar'
						name='search-bar'
						placeholder='Search Recipes'
						value={searchInput}
						onChange={searchHandler}
					/>
				</div>
				<div id='recipe-container'>{searchRecipes()}</div>
			</main>
		</div>
	);
};

export default HomeScreen;
