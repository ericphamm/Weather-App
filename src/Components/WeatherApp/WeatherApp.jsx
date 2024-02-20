import React from 'react'
import './WeatherApp.css'

import clear_icon from "../Assets/clear.png";
import cloudy_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import humidity_icon from "../Assets/humidity.png";
import rain_icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";


const WeatherApp = () => {
  return (
	<div className='container'>
		<div className='top-bar'>
			<input type="text" className='cityInput' placeholder='Search the city'></input>
			<div className="search-icon">
				<img src={search_icon} alt="" />
			</div>
		</div>
		<div className="weather-image">
			<img src={cloudy_icon} alt="" />
		</div>
		<div className="weather-temp">24C</div>
		<div className="weather-location">London</div>
		<div className="data-container">
			<div className="element">
				<img src={humidity_icon} alt="" className="icon" />
				<div className="data">
					<div className="humidity-percent">64%</div>
					<div className="text">Humidity</div>
				</div>
				<img src={wind_icon} alt="" className="icon" />
				<div className="data">
					<div className="humidity-percent">18km/h</div>
					<div className="text">Wind Speed</div>
				</div>
			</div>
		</div>
		
	</div>
  )
}

export default WeatherApp