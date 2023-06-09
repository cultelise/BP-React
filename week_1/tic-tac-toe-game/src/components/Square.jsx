const Square = (props) => {
	const squareHandler = (event) => {
		if (!props.squareValue) {
			if (props.player) {
				props.squares[props.index] = 'X';
				props.setSquares(props.squares);
				props.setPlayer(!props.player);
			} else {
				props.squares[props.index] = 'O';
				props.setSquares(props.squares);
				props.setPlayer(!props.player);
			}
		}
	};
	return (
		<div className='square' onClick={squareHandler}>
			{props.squareValue === 'O' ? 'O' : props.squareValue}
		</div>
	);
};

export default Square;
