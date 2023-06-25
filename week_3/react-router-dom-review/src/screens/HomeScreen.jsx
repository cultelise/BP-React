import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
	const numRef = useRef();
	const passRef = useRef();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (passRef.current.value !== 'admin') {
			return alert('Wrong Password');
		} else {
			alert('Correct Password');
			navigate(`/details/${numRef.current.value}`);
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input ref={numRef} type='number' placeholder='Enter a number 1-1000' />
				<input ref={passRef} type='password' placeholder='Password' />
				<button>Send it</button>
			</form>
		</div>
	);
};

export default HomeScreen;
