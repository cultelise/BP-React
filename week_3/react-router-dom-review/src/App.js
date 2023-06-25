import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import DetailScreen from './screens/DetailScreen';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/about' about element={<AboutScreen />} />
				<Route path='/details/:id' element={<DetailScreen />} />
			</Routes>
		</div>
	);
}

export default App;
