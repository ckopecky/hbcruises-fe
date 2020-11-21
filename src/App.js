import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

import './App.css';
import Form from './components/Form';
import Overlay from './components/Overlay';

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
	const [zip, setZip] = useState({ zip: '63701' });

	//query info
	const { loading, error, data } = useQuery(WEATHER, { variables: zip });
	console.log('loading', loading);
	console.log('error', error);
  console.log('data', data)
	const changeZip = (zip) => {
		setZipInput(zip);
	};

	const submitZip = (zip) => {
		setZip({ zip });
		setZipInput('');
	};

	if (loading) return <h1>Loading...</h1>;
	if (error) return <h1>Error :(</h1>;
	//weather widget
	return (
		<div className='container'>
			<div className='overlay'>
				<Overlay data={data} />
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
