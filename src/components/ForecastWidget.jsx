import React, { useState, useEffect, useRef } from 'react';

export default function ForecastWidget({ isCelsius, dayOfWeek, date, index }) {
  const [currentWeatherData, setWeatherData] = useState(null);
  const [tempSign, setTempSign] = useState('');
  const [currentWeather, setCurrentWeather] = useState();
  const [maxTemp, setMaxTemp] = useState();
  const [minTemp, setMinTemp] = useState();
  const indexOfList = useRef(index);

  useEffect(() => {
    indexOfList.current = index;
    console.log('Index: ', index);
  }, [index]);

  useEffect(() => {
    if (!currentWeatherData) return;

    if (indexOfList.current >= 5) {
      return; // If it's out of bounds, return early
    }
    const weatherInList = currentWeatherData.list[indexOfList.current].main;

    if (isCelsius) {
      setTempSign('C');
      setCurrentWeather((weatherInList.temp - 273.15).toFixed(0));
      setMaxTemp((weatherInList.temp_max - 273.15).toFixed(0));
      setMinTemp((weatherInList.temp_min - 273.15).toFixed(0));
    } else {
      setTempSign('F');
      setCurrentWeather(
        ((weatherInList.temp - 273.15) * (9 / 5) + 32).toFixed(0)
      );
      setMaxTemp(((weatherInList.temp_max - 273.15) * (9 / 5) + 32).toFixed(0));
      setMinTemp(((weatherInList.temp_min - 273.15) * (9 / 5) + 32).toFixed(0));
    }
  }, [isCelsius, currentWeatherData]);

  useEffect(() => {
    const fetchData = async () => {
      const lat = 38.907192;
      const lon = -77.036873;
      const key = 'e3f34b30d043965fb5b0cb0852e479ce';
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
      const response = await fetch(url);
      const data = await response.json();

      setWeatherData(data);
    };
    fetchData();
  }, []);

  if (!currentWeatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div className='current-weather-widget'>
      <div className='date-time'>
        <h3 className='day'>{dayOfWeek}</h3>
        <h3 className='date'>{date}</h3>
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
