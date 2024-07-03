import React, { useState } from 'react';
import ForecastWidget from './components/ForecastWidget';
import Header from './components/Header';
import Toggle from './components/Toggle';
import DateClass from './components/DateClass';

export default function App() {
    const [isCelsius, setIsCelsius] = useState(false);
    const [location, setLocation] = useState('default location');
    const days = DateClass.getDays();
    const dates = DateClass.getDates();

    const handleTempChange = () => {
        setIsCelsius(!isCelsius);
    };

    const ForecastDisplay = () => {
        return days.slice(0, 7).map((day, index) => {
            return (
                <ForecastWidget
                    key={index}
                    isCelsius={isCelsius}
                    dayOfWeek={day}
                    date={dates[index]}
                    index={index}
                />
            );
        });
    };

    return (
        <div>
            <Header setLocation={setLocation} />
            <div className='toggle-title-container'>
                <Toggle
                    left='°F'
                    right='°C'
                    checked={isCelsius}
                    onChange={handleTempChange}
                    className='toggle'
                />
                <h1 className='title'>{location}</h1>
            </div>
            <div className='seven-day-forecast'>{ForecastDisplay()}</div>
        </div>
    );
}
