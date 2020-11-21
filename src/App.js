import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

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
  const [ zipInput, setZipInput ] = useState("95126");
  const [ zip, setZip ] = useState({zip: "63701" });


  //query info
  const { loading, error, data} = useQuery(WEATHER, {variables: zip});
  console.log("loading", loading);
  console.log("error", error)

  //handleChange

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setZipInput(e.target.value)
  };

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();
    setZip({"zip": zipInput });
    setZipInput('');
  }

  

  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>Error :(</h1>
    console.log("data", data);
  //weather widget
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Zipcode?</label>
        <input name="zip" onChange={handleChange} type="text" value={zipInput} />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>

    </form>
    <div>
    {
      data.weather.map(location => {
        return (
          <div key={location.city}>
            <h2>{location.city}</h2>
            <h3>{location.conditions}</h3>
            <h3>{location.temperature}°</h3>
          </div>
        )
      })
    }
  </div> 
    </>
  )
  
}

export default App;
