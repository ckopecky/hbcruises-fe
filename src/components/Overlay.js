import React from 'react';
import { backgroundPics } from '../assets';

const Overlay = (props) => {
	return (
		<>
			{props.data.weather.map((location) => {
				let backgroundPicture = backgroundPics[location.icon];
				return (
					<div
						key={location.city}
						style={{
							display: 'flex',
							justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '40px',
							height: '70%',
							objectFit: 'cover',
							borderRadius: '10px 10px 0px 0px',
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
			})}
		</>
	);
};

export default Overlay;
