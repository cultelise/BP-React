import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailScreen = () => {
	const [person, setPerson] = useState({});

	const { id } = useParams();

	useEffect(() => {
		axios.get(`https://swapi.dev/api/people/${id}`).then((res) => {
			console.log(res.data);
			setPerson(res.data);
		});
	}, []);

	return <div>{person?.name}</div>;
};

export default DetailScreen;
