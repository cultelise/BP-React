import axios from 'axios';
import { useState, useContext } from 'react';
import AuthContext from '../store/authContext';

const Auth = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [register, setRegister] = useState(false);

	const authCtx = useContext(AuthContext);

	const submitHandler = async (e) => {
		e.preventDefault();

		const body = {
			username: username,
			password: password,
		};

		const url = 'http://localhost:3000';

		try {
			let response = await axios.post(
				register ? `${url}/register` : `${url}/login`,
				body
			);
			if (response.status === 200) {
				alert(register ? 'register successful' : 'login successful');
			}
			const { token, exp, userId, username } = response.data;
			authCtx.login(token, exp, userId);
		} catch (error) {
			alert(error.response.data);
			console.log(error);
		}
	};

	const userChangeHandler = (e) => {
		setUsername(e.target.value);
	};

	const passChangeHandler = (e) => {
		setPassword(e.target.value);
	};

	const registerHandler = () => {
		if (register) {
			setRegister(false);
		} else {
			setRegister(true);
		}
	};

	return (
		<main>
			<h1>Welcome!</h1>
			<form className='form auth-form' onSubmit={submitHandler}>
				<input
					className='form-input'
					type='text'
					placeholder='Enter Username'
					value={username}
					onChange={userChangeHandler}
				/>
				<input
					className='form-input'
					type='password'
					placeholder='Enter Password'
					value={password}
					onChange={passChangeHandler}
				/>
				<button className='form-btn'>{register ? 'Sign Up' : 'Login'}</button>
			</form>
			<button className='form-btn' onClick={registerHandler}>
				Need to {register ? 'Login' : 'Sign Up'}?
			</button>
		</main>
	);
};

export default Auth;
