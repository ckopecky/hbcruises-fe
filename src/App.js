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

const WEATHER =  gql`
    query getWeather($zip: String) {
      weather(zip: $zip) {
        city
        temperature
        conditions
        zip

      }
    }
  `;


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
    setZip({[e.target.name]: zipInput });
    setZipInput('');
  }

  

