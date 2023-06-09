import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';

const { REACT_APP_API_KEY } = process.env;

function App() {
	const [movieList, setMovieList] = useState([]);
	const [watchList, setWatchList] = useState([]);
	const [page, setPage] = useState(1);

	const getData = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_KEY}&language=en-US&page=${page}`
			)
			.then((res) => setMovieList(res.data.results))
			.catch((err) => console.error('error:' + err));

		console.log(movieList);
	};

	useEffect(() => {
		getData();
	}, [page]);

	const addMovie = (movie) => {
		setWatchList(() => {
			return [...watchList, movie];
		});
		const newState = movieList.filter((listItem) => {
			return listItem !== movie;
		});
		setMovieList(newState);
	};

	const removeMovie = (movie) => {
		const newWatchState = watchList.filter((listItem) => {
			return listItem !== movie;
		});

		setWatchList(newWatchState);
		setMovieList(() => {
			return [...movieList, movie];
		});
	};

	return (
		<div className='App'>
			<Header />
			<main>
				<MovieScreen
					watchList={watchList}
					page={page}
					setPage={setPage}
					movieList={movieList}
					addMovie={addMovie}
					removeMovie={removeMovie}
				/>
				<Watchlist watchList={watchList} removeMovie={removeMovie} />
			</main>
		</div>
	);
}

export default App;
