import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const NewRecipeScreen = () => {
	const [ingredients, setIngredients] = useState([]);
	const [name, setName] = useState('');
	const [quantity, setQuantity] = useState('');

	const addIngredient = () => {
		setIngredients([...ingredients, { name: name, quantity: quantity }]);
		setName('');
		setQuantity('');
	};

	const initialValues = {
		type: '',
		recipeName: '',
		imageURL: '',
		prepTime: '',
		cookTime: '',
		serves: '',
		instructions: '',
		ingredients: [],
	};

	const onSubmit = (values) => {
		values.ingredients = ingredients;

		axios
			.post('https://recipes.devmountain.com/recipes', values)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};

	return (
		<section id='form-main'>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange, handleSubmit }) => {
					return (
						<form onSubmit={handleSubmit}>
							<div id='form-title'>Tell us about your Recipe!</div>
							<div id='form-name-url'>
								<input
									type='text'
									name='recipeName'
									placeholder='Name'
									className='form-input'
									id='name-input'
									value={values.recipeName}
									onChange={handleChange}
								/>
								<input
									type='text'
									name='imageURL'
									placeholder='Image URL'
									id='url-input'
									className='form-input'
									value={values.imageURL}
									onChange={handleChange}
								/>
							</div>
							<div id='labels'>
								<label htmlFor='cook'>
									<input
										type='radio'
										id='cook'
										name='type'
										value='cook'
										onChange={handleChange}
										className='radio-button'
									/>
									Cook
								</label>
								<label htmlFor='bake'>
									<input
										type='radio'
										id='bake'
										name='type'
										value='bake'
										onChange={handleChange}
										className='radio-button'
									/>
									Bake
								</label>
								<label htmlFor='drink'>
									<input
										type='radio'
										id='drink'
										name='type'
										value='drink'
										onChange={handleChange}
										className='radio-button'
									/>
									Drink
								</label>
							</div>
							<div id='form-deets'>
								<input
									type='text'
									name='prepTime'
									placeholder='Prep Time'
									className='small-input'
									value={values.prepTime}
									onChange={handleChange}
								/>
								<input
									type='text'
									name='cookTime'
									placeholder='Cook Time'
									className='small-input'
									value={values.cookTime}
									onChange={handleChange}
								/>
								<input
									type='text'
									name='serves'
									placeholder='Serves'
									className='small-input'
									value={values.serves}
									onChange={handleChange}
								/>
							</div>
							<div id='form-ingredients'>
								<div id='ingredients-input'>
									<input
										type='text'
										placeholder='Ingredient'
										className='form-input'
										name='ingredient'
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
									<input
										type='text'
										placeholder='Quantity'
										className='form-input'
										name='quantity'
										value={quantity}
										onChange={(e) => setQuantity(e.target.value)}
									/>
								</div>
								<div id='ingredients-list'>
									{ingredients.map((ingredient) => {
										return (
											<li key={ingredient.name}>
												{ingredient.quantity} {ingredient.name}
											</li>
										);
									})}
								</div>
							</div>
							<button
								id='ingredients-button'
								onClick={addIngredient}
								type='button'
							>
								Add Ingredient
							</button>
							<textarea
								name='instructions'
								id='instructions-input'
								cols='30'
								rows='10'
								value={values.instructions}
								onChange={handleChange}
								placeholder='List the Instructions'
							></textarea>
							<div>
								<button type='submit' id='form-button'>
									Save
								</button>
							</div>
						</form>
					);
				}}
			</Formik>
		</section>
	);
};

export default NewRecipeScreen;
