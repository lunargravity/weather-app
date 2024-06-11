import React, { useState, useEffect } from 'react';
import { DateClass } from './DateClass';

function WeatherDisplay({ weatherData, isCelsius }) {
  const [tempSign, setTempSign] = useState('');
  const [currentWeather, setCurrentWeather] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const [currentTime, setCurrentTime] = useState(DateClass.currentTime());
  const [dayOfWeek, setDayOfWeek] = useState(DateClass.dayOfWeek());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTime = DateClass.currentTime();
      const newDayOfWeek = DateClass.dayOfWeek();
      setCurrentTime(newTime);
      setDayOfWeek(newDayOfWeek);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!weatherData) return;

    if (isCelsius) {
      setTempSign('C');
      setCurrentWeather((weatherData.main.temp - 273.15).toFixed(0));
      setMaxTemp((weatherData.main.temp_max - 273.15).toFixed(0));
      setMinTemp((weatherData.main.temp_min - 273.15).toFixed(0));
    } else {
      setTempSign('F');
      setCurrentWeather(
        ((weatherData.main.temp - 273.15) * (9 / 5) + 32).toFixed(0)
      );
      setMaxTemp(
        ((weatherData.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0)
      );
      setMinTemp(
        ((weatherData.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(0)
      );
    }
  }, [isCelsius, weatherData]);

  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='date'>{dayOfWeek.toUpperCase()}</h3>
        <h3 className='time'>{currentTime}</h3>
      </div>
      <div className='temp-and-icon'>
        <div className='temp'>
          <h1>
            {currentWeather}°{tempSign}
          </h1>
          <h4>
            {minTemp}°{tempSign}/{maxTemp}°{tempSign}
          </h4>
        </div>
        <p className='icon'>&#9925;</p>
      </div>
    </div>
  );
}

export default function ForecastWidget({ isCelsius }) {
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
    return <p>Loading...</p>;
  }

  return <WeatherDisplay weatherData={weatherData} isCelsius={isCelsius} />;
}
