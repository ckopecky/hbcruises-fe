import React from 'react';
import Loader from 'react-loader-spinner';
import { backgroundPics } from '../assets';

const WeatherData = ({data, loading, error}) => {
    let backgroundPicture;
    backgroundPicture = backgroundPics["default"];
    return loading ?  
            (<div className="background" style={{
                backgroundImage: '',
            }}>
                <Loader type="ThreeDots" color="darkred"/>
            </div>) : error ? 
                        (
                        <div className="background" style={{
                                backgroundImage: 'url(' + backgroundPicture + ')'
                            }}>
                            <div className='city-temperature'>
                                <div className='city-conditions'>
                                    <h2>Error</h2>
                                    <div className='icon-conditions error'>
                                        <h4>Zip code doesn't exist</h4>
                                        <p>Have a cat instead</p>
                                    </div>
                                    <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/120270024_10102925663988191_8533342968999125116_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=fcYRNg-WC8sAX9W424o&_nc_ht=scontent-sjc3-1.xx&oh=8ca770359a4373c9cada4751a1b224b7&oe=5FDDA7D6" alt="placekitten" height="100" width="100"/>
                                    <p>Try a new zipcode!</p>
                                </div>
                            </div>
                        </div>
                        ): (
                            data.weather.map((location) => {
                                console.log(location);
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
                                                <h3>{Math.round(location.temperature)}°F</h3>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                    ))

};

export default WeatherData;
