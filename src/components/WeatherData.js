import React from 'react';
import Loader from 'react-loader-spinner';
import { backgroundPics } from '../assets';

const WeatherData = ({data, loading, error}) => {
    let backgroundPicture;
    backgroundPicture = backgroundPics["default"];

    if(loading) {
        return (
        <div className="background" style={{
            backgroundImage: '',
        }}>
            <Loader type="ThreeDots" />
        </div>
        )
    }

    if(error) {
        return (
        <div className="background" style={{
            backgroundImage: 'url(' + backgroundPicture + ')',
        }}>
            <div className='city-temperature'>
                <div className='city-conditions'>
                    <h2>Error</h2>
                    <div className='icon-conditions error'>
                        <h4>Zip code doesn't exist</h4>
                        <p>Have a kitten instead</p>
                    </div>
                    <img src="http://www.placekitten.com/100/100" alt="placekitten" height="100" width="100"/>
                </div>
            </div>
        </div>
        )
    }
    return (
	    data &&  
			data.weather.map((location) => {
                backgroundPicture = backgroundPics[location.icon];
				return (
					<div
                        key={location.city}
                        className="background"
						style={{
							backgroundImage: 'url(' + backgroundPicture + ')',
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
			}
    ))
};

export default WeatherData;
