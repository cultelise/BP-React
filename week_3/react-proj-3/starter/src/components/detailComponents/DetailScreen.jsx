import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdBanner from '../homeComponents/AdBanner';
import { useParams } from 'react-router-dom';
import RecipeInfo from './RecipeInfo';
import RecipeInstructions from './RecipeInstructions';
import DetailsCard from './DetailsCard';
import '../../App.css';

const DetailScreen = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});

	const getData = async () => {
		let response = await axios.get(
			`https://recipes.devmountain.com/recipes/${id}`
		);
		console.log(response.data);
		setRecipe(response.data);
	};

	useEffect(() => {
		getData();
	});

	return (
		<div id='details-page'>
			<AdBanner title={recipe.recipe_name} url={recipe.image_url} />
			<main id='details-main'>
				<DetailsCard>
					<RecipeInfo recipe={recipe} />
				</DetailsCard>
				<DetailsCard>
					<RecipeInstructions recipe={recipe} />
				</DetailsCard>
			</main>
		</div>
	);
};

export default DetailScreen;
