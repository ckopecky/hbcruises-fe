import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { backgroundPics } from './assets';

import './App.css';
// query Query($weatherZipCode: String) {
//   weather(zipCode: $weatherZipCode) {
//     city
//     temperature
//     conditions
//     description
//     feels_like
//     temp_hi
//     temp_low
//     humidity
//     wind_speed
//     error
//     message
//   }
// }

// {
//   "weatherZipCode": "95126"
// }

const WEATHER = gql`
	query getWeather($zip: String) {
		weather(zip: $zip) {
			city
			temperature
			conditions
			zip
			icon
			cloud_cover
		}
	}
`;

function App() {
	//state for form
	const [zipInput, setZipInput] = useState('');
	const [ zip, setZip ] = useState({ zip: '63701' });

	//query info
	const { loading, error, data } = useQuery(WEATHER, { variables: zip });
	console.log('loading', loading);
	console.log('error', error);

	//handleChange

	const handleChange = (e) => {
		console.log(e.target.name, e.target.value);
		setZipInput(e.target.value);
	};

	//handleSubmit

	const handleSubmit = (e) => {
		e.preventDefault();
		setZip({ zip: zipInput });
		setZipInput('');
	};

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error :(</h1>;
	console.log('data', data);
	//weather widget
	return (
		<div className='container'>
			<div className='overlay'>
				{data.weather.map((location) => {
					let backgroundPicture = backgroundPics[location.icon];
					return (
						<div
							key={location.city}
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '60%',
                objectFit: 'cover',
                borderRadius: '10px 10px 0px 0px',
								backgroundImage:
									'url(' + backgroundPicture + ')',
							}}>
							<div className='city-temperature'>
								<div className='city-conditions'>
									<h2>{location.city}</h2>
									<div className='icon-conditions'>
										<img
											src={`http://openweathermap.org/img/wn/${location.icon}@2x.png`}
											alt={location.conditions}
										/>
										<span className='conditions'>
											{location.conditions}
										</span>
									</div>
									<h3>{location.temperature}°F</h3>
								</div>
							</div>
						</div>
					);
				})}
				<form onSubmit={handleSubmit}>
          <label>{`Enter Zipcode:  `}</label>
					<div className="input-button">
						<input
							name='zip'
							onChange={handleChange}
							type='number'
              value={zipInput}
              placeholder="95126"
						/>
            <button type='submit' onClick={handleSubmit}>
						Submit
					</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default App;
