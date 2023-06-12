import { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import axios from 'axios';
import '../../App.css';

const HomeScreen = () => {
	const [recipes, setRecipes] = useState([]);

	const getData = async () => {
		const response = await axios.get('http://recipes.devmountain.com/recipes');
		console.log(response.data);
		setRecipes(response.data);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<AdBanner />
			{/* Much code from Part 2 will be placed around here. Do your best! */}
		</div>
	);
};

export default HomeScreen;
