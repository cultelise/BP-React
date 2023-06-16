import { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import axios from 'axios';
import '../../App.css';
import RecipeCard from '../recipeComponents/RecipeCard';
import { BiSearchAlt2 } from 'react-icons/bi';

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [newRecipe, setNewRecipe] = useState({
		title: 'Pineapple Salmon',
		content:
			'This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!',
		id: 3,
		url: 'https://hips.hearstapps.com/hmg-prod/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
	});

	const getData = async () => {
		const response = await axios.get('http://recipes.devmountain.com/recipes');
		setRecipes(filterRecipes(response.data));
		console.log(recipes);
	};

	const filterRecipes = (recipes) => {
		let arr = [];

		return recipes.filter((recipe, index) => {
			if (recipe.image_url.startsWith('https') && recipe.recipe_name !== '') {
				if (arr.includes(recipe.recipe_name)) {
					return false;
				} else {
					arr.push(recipe.recipe_name);
					return true;
				}
			}
		});
	};

	const searchRecipes = () => {
		let filteredRecipes = recipes.filter((recipe) => {
			if (
				recipe.recipe_name.toLowerCase().includes(searchInput.toLowerCase())
			) {
				return true;
			}
		});

		return filteredRecipes.map((recipe, index) => {
			if (index < 3) {
				return (
					<RecipeCard
						key={recipe.recipe_name}
						title={recipe.recipe_name}
						url={recipe.image_url}
						id={recipe.recipe_id}
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
	});

	return (
		<div>
			<AdBanner
				title={newRecipe.title}
				content={newRecipe.content}
				id={newRecipe.id}
				url={newRecipe.url}
			/>
			<main id='home-main'>
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
