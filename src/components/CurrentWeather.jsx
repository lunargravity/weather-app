import React, { useState, useEffect } from 'react';
import { fetchWeatherApi } from 'openmeteo';

export default function CurrentWeather() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const lat = 38.907192;
      const lon = -77.036873;
      const APIkey = 'e3f34b30d043965fb5b0cb0852e479ce';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;
      const response = await fetch(url).then((res) => res.json());
      console.log(response);
    };

    fetchData();
  }, []);

  if (!weatherData) {
    // Render loading state or return null while data is being fetched
    return <p>Loading...</p>;
  }

  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='date'>MONDAY</h3>
        <h3 className='time'>TIME</h3>
      </div>
      <div className='temp-and-icon'>
        <div className='temp'></div>

        <p className='icon'>&#9925;</p>
      </div>
    </div>
  );
}
