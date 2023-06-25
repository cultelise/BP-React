import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<h2>RRD</h2>
			<nav>
				<Link to={'/'}>
					<button className='nav-btn'>Home</button>
				</Link>
				<Link to={'/about'}>
					<button className='nav-btn'>About</button>
				</Link>
			</nav>
		</header>
	);
};

export default Header;
