import './App.css';
import Square from './components/Square';
import { useState } from 'react';

function App() {
	const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', '']);
	const [player, setPlayer] = useState(true);

	const resetGame = () => {
		setSquares(['', '', '', '', '', '', '', '', '']);
		setPlayer(true);
	};

	const calculateWinner = (arr) => {
		let message = 'Who will win?';
		let lines = [
			[0, 1, 2],
			[0, 3, 6],
			[0, 4, 8],
			[1, 4, 7],
			[2, 5, 8],
			[3, 4, 5],
			[6, 4, 2],
			[6, 7, 8],
		];
		lines.forEach((winningLines, index) => {
			const [a, b, c] = winningLines;
			if (arr[a] && arr[a] === arr[c] && arr[a] === arr[b]) {
				message = `${arr[a]} has won!`;
			}
		});
		return message;
	};

	return (
		<div className='App'>
			<div className='container'>
				{squares.map((value, index) => {
					return (
						<Square
							index={index}
							player={player}
							setPlayer={setPlayer}
							squares={squares}
							setSquares={setSquares}
							squareValue={value}
						/>
					);
				})}
			</div>
			<button onClick={resetGame}>Reset</button>
			<br />
			<span>{calculateWinner(squares)}</span>
		</div>
	);
}

export default App;
