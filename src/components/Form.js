import React from 'react';

const Form = (props) => {
	//handleChange

	const handleChange = (e) => {
		props.changeZip(e.target.value);
	};

	//handleSubmit

	const handleSubmit = (e) => {
		e.preventDefault();
		props.submitZip(props.zipInput);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>{`Enter Zipcode:  `}</label>
			<div className='input-button'>
				<input
					name='zip'
					onChange={handleChange}
					type='number'
					value={props.zipInput}
					placeholder='95126'
				/>
				<button type='submit' onClick={handleSubmit}>
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form;
