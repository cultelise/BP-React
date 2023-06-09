import React from 'react';
import MovieCard from './MovieCard';

const Watchlist = ({ watchList, removeMovie }) => {
	const movieDisplay = watchList.map((movie) => {
		return (
			<MovieCard
				key={movie.original_title}
				movie={movie}
				watchList={watchList}
				removeMovie={removeMovie}
			/>
		);
	});
	return (
		<div className='watchlist'>
			<h1>My Watchlist</h1>
			<div className='movie-container'>{movieDisplay}</div>
		</div>
	);
};

export default Watchlist;
