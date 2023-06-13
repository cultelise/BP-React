import React from 'react';
import { Link } from 'react-router-dom';

const AdBanner = () => {
	return (
		<div id='ad-banner'>
			<div id='banner-content'>
				<h3>New Recipe</h3>
				<div id='banner-title'>Pineapple Salmon</div>
				<h3>
					This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
					brown sugar rub, baked for 25 minutes on a bed of pineapple, and
					garnished in butter, garlic, and chives. You won’t want to miss it!
				</h3>
				<Link to='/recipe/3'>
					<button className='blue-btn'>Check it out</button>
				</Link>
			</div>
		</div>
	);
};

export default AdBanner;
