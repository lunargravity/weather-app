import React, { useState, useEffect } from 'react';
import { DateClass } from './DateClass';

export default function ForecastWidget({ temperature }) {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState(DateClass.currentTime());
  const [dayOfWeek, setDayOfWeek] = useState(DateClass.dayOfWeek());

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = DateClass.getToday();
      const newTime = DateClass.currentTime();
      const newDayOfWeek = DateClass.dayOfWeek();
      setCurrentTime(newTime);
      setDayOfWeek(newDayOfWeek);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='seven-day-forecast'>
      <div className='current-weather-widget'>
        <div className='date-time'>
          <h3 className='date'>{dayOfWeek.toUpperCase()}</h3>
          <h3 className='time'>{currentTime}</h3>
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
      {/* For loop for the other days of the week */}
    </div>
  );
}
