import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectDisplay } from '../redux/slices/displayCountrySlice';

const Symbols = () => {
	const currentDisplay = useSelector(selectDisplay);

	return (
		<div className='symbols'>
			<div className='stack'>
				<h2>{currentDisplay.name.common} Flag: </h2>
				<br />
				<img src={currentDisplay.flags.png} alt='flag' />
			</div>
			<div className='stack'>
				<h2>{currentDisplay.name.common} Coat of Arms:</h2>
				<br />
				<img src={currentDisplay.coatOfArms.png} alt='coat of arms' />
			</div>
		</div>
	);
};

export default Symbols;
