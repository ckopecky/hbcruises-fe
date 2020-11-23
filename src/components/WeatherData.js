import React, { useState } from 'react';
import Loader from 'react-loader-spinner';
import { backgroundPics } from '../assets';
import { errorPic, iconPicURL } from "../config";

const WeatherData = ({ data, loading, error }) => {
    let backgroundPicture;

	backgroundPicture = backgroundPics['default'];
	return loading ? (
		<div
			className='background-weather'
			style={{
				backgroundImage: '',
			}}>
			<Loader type='ThreeDots' color='darkred' />
		</div>
	) : error ? (
		<div
			className='background-weather'
			style={{
				backgroundImage: 'url(' + backgroundPicture + ')',
			}}>
			<div className='city-temperature'>
				<h2>Error!</h2>
				<div className='icon-conditions error'>
                    <div>
                        <p>Zip code doesn't exist</p>
                        <p>Have a cat instead</p>
                    </div>
                    <img
                        src={errorPic}
                        alt='gray and white senior cat'
                        height='100'
                        width='100'
                        id="error-pic"
                    />
				</div>
				
				<p>Try a new zipcode!</p>
			</div>
		</div>
	) : (
		data.weather.map((location) => { 
			console.log(location);
			backgroundPicture = backgroundPics[location.icon];
			return (
				<div
					key={location.city}
					className='background-weather'
					style={{
						backgroundImage: 'url(' + backgroundPicture + ')',
					}}>
					<div className='city-temperature'>
                        <h1>{Math.round(location.temperature)}°F</h1>
						<h2>{location.city}</h2>
						<div className='icon-conditions'>
							<img
								src={`${iconPicURL}${location.icon}@2x.png`}
								alt={location.conditions}
							/>
							<div className='conditions'>
								{location.conditions}
							</div>
						</div>
					</div>
				</div>
			);
		})
	);
};

export default WeatherData;
