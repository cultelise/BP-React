import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Overview = () => {
	const currentDisplay = useSelector(selectDisplay);

	console.log(currentDisplay);

	const languages = (current) => {
		for (let item in current) {
			console.log(item);
		}
	};

	return (
		<div className='stack'>
			<ul>
				<h2>Name: {currentDisplay.name.common}</h2>
				<h2>Flag: {currentDisplay.flag}</h2>
				<h2>Languages: {languages(currentDisplay.languages)}</h2>
				<h2>Capital: {currentDisplay.capital}</h2>
			</ul>
		</div>
	);
};

export default Overview;
