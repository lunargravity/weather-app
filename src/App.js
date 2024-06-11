import React, { useState } from 'react';
import ForecastWidget from './components/ForecastWidget';
import Header from './components/Header';
import Toggle from './components/Toggle';

export default function App() {
  const [isCelsius, setIsCelsius] = useState(false);

  const handleTempChange = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <div className='main-dashboard'>
      <Header />
      <Toggle
        left='°F'
        right='°C'
        checked={isCelsius}
        onChange={handleTempChange}
      />
      <ForecastWidget isCelsius={isCelsius} />
    </div>
  );
}
