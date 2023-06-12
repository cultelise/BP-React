import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/homeComponents/HomeScreen';
import NewRecipeScreen from './components/newRecipeComponents/NewRecipeScreen';
import DetailScreen from './components/detailComponents/DetailScreen';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route index element={<HomeScreen />} />
				<Route path='/recipe/new' element={<NewRecipeScreen />} />
				<Route path='/recipe/:id' element={<DetailScreen />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
