import React, { useState } from 'react';
import ForecastWidget from './components/ForecastWidget';
import Header from './components/Header';
import Toggle from './components/Toggle';
import DateClass from './components/DateClass';

export default function App() {
  const [isCelsius, setIsCelsius] = useState(false);
  const days = DateClass.fiveDays();
  const dates = DateClass.fiveDates();

  const handleTempChange = () => {
    setIsCelsius(!isCelsius);
  };

  const fiveDayDisplay = () => {
    return days.slice(0, 5).map((day, index) => {
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
      <Header />
      <Toggle
        left='°F'
        right='°C'
        checked={isCelsius}
        onChange={handleTempChange}
      />
      <div className='five-day-forecast'>{fiveDayDisplay()}</div>
    </div>
  );
}
