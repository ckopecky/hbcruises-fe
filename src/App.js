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


