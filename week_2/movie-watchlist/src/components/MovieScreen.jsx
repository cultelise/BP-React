import React from 'react';
import MovieCard from './MovieCard';

const MovieScreen = ({
	watchList,
	movieList,
	page,
	setPage,
	addMovie,
	removeMovie,
}) => {
	const movieDisplay = movieList.map((movie) => {
		return (
			<MovieCard
				key={movie.original_title}
				movie={movie}
				addMovie={addMovie}
				removeMovie={removeMovie}
				watchList={watchList}
			/>
		);
	});

	const increment = () => setPage(page++);
	const decrement = () => setPage(page--);

	return (
		<div className='page'>
			<h1>Elise's Movie Theatre</h1>
			<h3>Add a movie to your watch list</h3>
			<div className='btn-container'>
				<button onClick={page !== 1 && decrement}>Previous</button>
				<button onClick={increment}>Next</button>
			</div>
			<div className='movie-container'>{movieDisplay}</div>
		</div>
	);
};

export default MovieScreen;
