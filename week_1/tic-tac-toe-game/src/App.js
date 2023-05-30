import './App.css';
import Square from './components/Square';

function App() {
	const name = 'Elise';

	return (
		<div className='App'>
			<Square propVar={name} />
		</div>
	);
}

export default App;
