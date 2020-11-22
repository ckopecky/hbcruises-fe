import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';
import Form from './components/Form';
import WeatherData from './components/WeatherData';

const WEATHER = gql`
	query getWeather($zip: String) {
		weather(zip: $zip) {
			city
			temperature
			conditions
			zip
			icon
			cloud_cover
      error
      message
		}
	}
`;

function App() {
	//state for form
	const [zipInput, setZipInput] = useState('');
	const [zip, setZip] = useState({ zip: '63701' });

	//query info
	const { loading, error, data } = useQuery(WEATHER, { variables: zip });

	const changeZip = (zip) => {
		setZipInput(zip);
	};

	const submitZip = (zip) => {
		setZip({ zip });
		setZipInput('');
	};

	//weather widget
	return (
		<div className='container'>
			<div className='overlay'>
				<WeatherData data={data} loading={loading} error={error}/>
				<Form
					changeZip={changeZip}
					submitZip={submitZip}
					zipInput={zipInput}
				/>
			</div>
		</div>
	);
}

export default App;
