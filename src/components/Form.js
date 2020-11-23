import React from 'react';

const Form = ({zipInput, changeZip, submitZip}) => {
	//handleChange

	const handleChange = (e) => {
		changeZip(e.target.value);
	};

	//handleSubmit

	const handleSubmit = (e) => {
        e.preventDefault();
        //validates that enter a zip that is exactly five digits long
        if(new RegExp("^([0-9]{5}){1}$", "g").test(zipInput)){
            submitZip(zipInput);
        } else {
            alert("Please make sure you enter a number exactly five digits long.")
        }
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='label-button'>
				<label htmlFor="zip-input">{`Enter Zipcode:  `}</label>
				<div>
					<input
						id="zip-input"
						name='zip'
						onChange={handleChange}
						type='number'
						value={zipInput}
						placeholder='i.e. 95126'
					/>
					<button type='submit' onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		</form>
	);
};

export default Form;
