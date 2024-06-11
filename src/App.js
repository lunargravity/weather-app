import React, { useState } from 'react';
import ForecastWidget from './components/ForecastWidget';
import Header from './components/Header';
import Toggle from './components/Toggle';

export default function App() {
  const [temp, setTemp] = useState('F');

  const handleTempChange = () => {
    setTemp(!temp);
  };

  return (
    <div className='main-dashboard'>
      <Header />
      <Toggle left='°F' right='°C' checked={temp} onChange={handleTempChange} />
      <ForecastWidget temperature={temp} />
    </div>
  );
}
