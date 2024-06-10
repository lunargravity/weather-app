import React, { useState, useEffect } from 'react';

export default function CurrentWeather({ temperature }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const lat = 38.907192;
      const lon = -77.036873;
      const key = 'e3f34b30d043965fb5b0cb0852e479ce';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!weatherData) {
    // Render loading state or return null while data is being fetched
    return <p>Loading...</p>;
  }

  console.log('main: ', weatherData.main);

  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='date'>MONDAY</h3>
        <h3 className='time'>11:59PM</h3>
      </div>
      <div className='temp-and-icon'>
        <div className='temp'>
          <h1>
            {weatherData.main.temp}°{temperature}
          </h1>
          <h4>
            {weatherData.main.temp_min}°{temperature}/
            {weatherData.main.temp_max}°{temperature}
          </h4>
        </div>

        <p className='icon'>&#9925;</p>
      </div>
    </div>
  );
}
