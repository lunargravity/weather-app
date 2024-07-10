import React, { useState, useEffect, useRef } from 'react';

export default function ForecastWidget({ isCelsius, dayOfWeek, date, index, latitude, longitude, handleDetails }) {
    const [currentWeatherData, setWeatherData] = useState(null);
    const [tempSign, setTempSign] = useState('');
    const [currentWeather, setCurrentWeather] = useState();
    const [maxTemp, setMaxTemp] = useState();
    const [minTemp, setMinTemp] = useState();
    const indexOfList = useRef(index);
    const [code, setCode] = useState(100);
    const [icon, setIcon] = useState('');
    const [iconAlt, setIconAlt] = useState('');
    const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    useEffect(() => {
        indexOfList.current = index;
    }, [index]);

    useEffect(() => {
        if (!currentWeatherData) return;

        if (indexOfList.current >= 7) {
            return; // If it's out of bounds, return early
        }
        const weatherInList = currentWeatherData.list[indexOfList.current];
        setCode(weatherInList.weather[0].id);
        setIconAlt(weatherInList.weather[0].main);
        setIcon(weatherInList.weather[0].icon);

        if (isCelsius) {
            setTempSign('C');
            setCurrentWeather((weatherInList.main.temp - 273.15).toFixed(0));
            setMaxTemp((weatherInList.main.temp_max - 273.15).toFixed(0));
            setMinTemp((weatherInList.main.temp_min - 273.15).toFixed(0));
        } else {
            setTempSign('F');
            setCurrentWeather(((weatherInList.main.temp - 273.15) * (9 / 5) + 32).toFixed(0));
            setMaxTemp(((weatherInList.main.temp_max - 273.15) * (9 / 5) + 32).toFixed(0));
            setMinTemp(((weatherInList.main.temp_min - 273.15) * (9 / 5) + 32).toFixed(0));
        }
    }, [isCelsius, currentWeatherData, code]);

    useEffect(() => {
        const fetchData = async () => {
            const lat = latitude;
            const lon = longitude;
            const key = 'e3f34b30d043965fb5b0cb0852e479ce';
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`;
            const response = await fetch(url);
            const data = await response.json();

            setWeatherData(data);
        };
        fetchData();
    }, [latitude, longitude]);

    if (!currentWeatherData) {
        return <p>Loading...</p>;
    }

    return (
        <div
            className='current-weather-widget'
            onClick={() => handleDetails(currentWeatherData, indexOfList.current)}>
            <div className='date-time'>
                <h3 className='day'>{dayOfWeek}</h3>
                <h3 className='date'>{date}</h3>
            </div>
            <div className='temp-and-icon'>
                <img
                    src={url}
                    alt={iconAlt}
                    className='icon'
                />
                <div className='temp'>
                    <h1>
                        {currentWeather}°{tempSign}
                    </h1>
                    <h4>
                        {minTemp}°{tempSign}/{maxTemp}°{tempSign}
                    </h4>
                </div>
            </div>
        </div>
    );
}
