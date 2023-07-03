import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectDisplay } from '../redux/slices/displayCountrySlice';
console.log(process.env.REACT_APP_API_KEY);

const Weather = () => {
	const [weather, setWeather] = useState();

	const display = useSelector(selectDisplay);
	const latitude = display.capitalInfo.latlng[0];
	const longitude = display.capitalInfo.latlng[1];

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: `${latitude}, ${longitude}` },
			headers: {
				'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			},
		};

		try {
			axios.request(options).then((response) => setWeather(response.data));
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
		<div>
			<table className='overview-table'>
				<tr>
					<td>Conditions: </td>
					<td>{weather?.current?.condition?.text}</td>
				</tr>
				<tr>
					<td>Temperature: </td>
					<td>{weather?.current?.temp_f}° F</td>
				</tr>
				<tr>
					<td>Feels Like: </td>
					<td>{weather?.current?.feelslike_f}° F</td>
				</tr>
				<tr>
					<td>Humidity: </td>
					<td>{weather?.current?.humidity}%</td>
				</tr>
				<tr>
					<td>Wind Speed: </td>
					<td>{weather?.current?.wind_mph} mph</td>
					<td>{weather?.current?.wind_dir}</td>
				</tr>
			</table>
		</div>
	);
};

export default Weather;
